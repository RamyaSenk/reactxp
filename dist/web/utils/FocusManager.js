/**
* FocusManager.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Manages focusable elements for better keyboard navigation.
*/
"use strict";
var ReactDOM = require("react-dom");
var PropTypes = require("prop-types");
var _lastComponentId = 0;
var FocusManager = (function () {
    function FocusManager() {
        this._myFocusableComponentIds = {};
    }
    FocusManager.prototype.setAsRootFocusManager = function () {
        FocusManager._rootFocusManager = this;
        this._isRoot = true;
    };
    // Whenever the focusable element is mounted, we let the application
    // know so that FocusManager could account for this element during the
    // focus restriction.
    FocusManager.prototype.addFocusableComponent = function (component) {
        if (component._focusableComponentId) {
            return;
        }
        var componentId = 'fc-' + ++_lastComponentId;
        var storedComponent = {
            component: component,
            onFocus: function () {
                FocusManager._currentFocusedComponent = storedComponent;
            }
        };
        FocusManager._allFocusableComponents[componentId] = storedComponent;
        if (!this._isRoot) {
            this._myFocusableComponentIds[componentId] = true;
        }
        if (FocusManager._currentRestrictionOwner && (this !== FocusManager._currentRestrictionOwner)) {
            // New focusable element is mounted but it's not in the scope of the
            // current view with restrictFocusWithin property.
            FocusManager._restrictComponentFocus(componentId);
        }
        component._focusableComponentId = componentId;
        var el = ReactDOM.findDOMNode(component);
        if (el) {
            el.addEventListener('focus', storedComponent.onFocus);
        }
    };
    FocusManager.prototype.removeFocusableComponent = function (component) {
        var componentId = component._focusableComponentId;
        if (componentId) {
            var storedComponent = FocusManager._allFocusableComponents[componentId];
            var el = ReactDOM.findDOMNode(component);
            if (storedComponent && el) {
                el.removeEventListener('focus', storedComponent.onFocus);
            }
            storedComponent.removed = true;
            FocusManager._removeComponentFocusRestriction(componentId);
            delete this._myFocusableComponentIds[componentId];
            delete FocusManager._allFocusableComponents[componentId];
            delete component._focusableComponentId;
        }
    };
    FocusManager.prototype.restrictFocusWithin = function () {
        var _this = this;
        // Limit the focus received by the keyboard navigation to all
        // the descendant focusable elements by setting tabIndex of all
        // other elements to -1.
        if (FocusManager._currentRestrictionOwner === this) {
            return;
        }
        if (FocusManager._currentRestrictionOwner) {
            FocusManager._removeFocusRestriction();
        }
        FocusManager._restrictionStack.push(this);
        FocusManager._currentRestrictionOwner = this;
        this._prevFocusedComponent = FocusManager._currentFocusedComponent;
        if (this._prevFocusedComponent && !this._prevFocusedComponent.removed) {
            var el = ReactDOM.findDOMNode(this._prevFocusedComponent.component);
            if (el && el.blur) {
                el.blur();
            }
        }
        Object.keys(FocusManager._allFocusableComponents).forEach(function (componentId) {
            if (!(componentId in _this._myFocusableComponentIds)) {
                FocusManager._restrictComponentFocus(componentId);
            }
        });
    };
    FocusManager.prototype.release = function () {
        var _this = this;
        // When the view is unmounted, restore the focus to the previous view with
        // restrictFocusWithin or remove the restriction if there is no such view.
        FocusManager._restrictionStack = FocusManager._restrictionStack.filter(function (focusManager) {
            return focusManager !== _this;
        });
        var prevFocusedComponent = this._prevFocusedComponent;
        delete this._prevFocusedComponent;
        if (FocusManager._currentRestrictionOwner === this) {
            FocusManager._removeFocusRestriction();
            FocusManager._currentRestrictionOwner = FocusManager._restrictionStack[FocusManager._restrictionStack.length - 1];
            // If possible, focus the element which was focused before the restriction.
            if (prevFocusedComponent && !prevFocusedComponent.removed && !prevFocusedComponent.restricted) {
                var el = ReactDOM.findDOMNode(prevFocusedComponent.component);
                if (el && el.focus) {
                    el.focus();
                }
            }
            if (FocusManager._currentRestrictionOwner) {
                FocusManager._currentRestrictionOwner.restrictFocusWithin();
            }
        }
    };
    FocusManager._removeFocusRestriction = function () {
        Object.keys(FocusManager._allFocusableComponents).forEach(function (componentId) {
            FocusManager._removeComponentFocusRestriction(componentId);
        });
    };
    FocusManager._setTabIndex = function (component, value) {
        var el = ReactDOM.findDOMNode(component);
        if (el) {
            var prev = el.hasAttribute('tabindex') ? el.tabIndex : undefined;
            if (value === undefined) {
                if (prev !== undefined) {
                    el.removeAttribute('tabindex');
                }
            }
            else {
                el.tabIndex = value;
            }
            return prev;
        }
        return null;
    };
    FocusManager._restrictComponentFocus = function (componentId) {
        var storedComponent = FocusManager._allFocusableComponents[componentId];
        if (storedComponent && !storedComponent.restricted) {
            storedComponent.origTabIndex = FocusManager._setTabIndex(storedComponent.component, -1);
            storedComponent.restricted = true;
        }
    };
    FocusManager._removeComponentFocusRestriction = function (componentId) {
        var storedComponent = FocusManager._allFocusableComponents[componentId];
        if (storedComponent && storedComponent.restricted) {
            FocusManager._setTabIndex(storedComponent.component, storedComponent.origTabIndex);
            delete storedComponent.origTabIndex;
            storedComponent.restricted = false;
        }
    };
    return FocusManager;
}());
FocusManager._restrictionStack = [];
FocusManager._allFocusableComponents = {};
exports.FocusManager = FocusManager;
// A mixin for the focusable elements, to tell the views that
// they exist and should be accounted during the focus restriction.
//
// isConditionallyFocusable is an optional callback which will be
// called for componentDidMount() or for componentWillUpdate() to
// determine if the component is actually focusable.
function applyFocusableComponentMixin(Component, isConditionallyFocusable) {
    var contextTypes = Component.contextTypes || {};
    contextTypes.focusManager = PropTypes.object;
    Component.contextTypes = contextTypes;
    inheritMethod('componentDidMount', function (focusManager) {
        if (!isConditionallyFocusable || isConditionallyFocusable.call(this)) {
            focusManager.addFocusableComponent(this);
        }
    });
    inheritMethod('componentWillUnmount', function (focusManager) {
        focusManager.removeFocusableComponent(this);
    });
    inheritMethod('componentWillUpdate', function (focusManager, origArguments) {
        if (isConditionallyFocusable) {
            var isFocusable = isConditionallyFocusable.apply(this, origArguments);
            if (isFocusable && !this._focusableComponentId) {
                focusManager.addFocusableComponent(this);
            }
            else if (!isFocusable && this._focusableComponentId) {
                focusManager.removeFocusableComponent(this);
            }
        }
    });
    function inheritMethod(methodName, action) {
        var origCallback = Component.prototype[methodName];
        Component.prototype[methodName] = function () {
            var focusManager = this.context && this.context.focusManager;
            if (focusManager) {
                action.call(this, focusManager, arguments);
            }
            else {
                console.error('FocusableComponentMixin: context error!');
            }
            if (origCallback) {
                origCallback.apply(this, arguments);
            }
        };
    }
}
exports.applyFocusableComponentMixin = applyFocusableComponentMixin;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FocusManager;
