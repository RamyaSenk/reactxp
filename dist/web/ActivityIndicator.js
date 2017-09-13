"use strict";
/**
* ActivityIndicator.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Control to display an animated activity indicator.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _activityIndicatorCss = "\n.rx-activity {\n  position: relative;\n  width: 100px;\n  height: 100px;\n}\n.rx-activity .layer-1-translate,\n.rx-activity .layer-3-translate,\n.rx-activity .layer-5-translate,\n.rx-activity .layer-7-translate {\n  -webkit-transform: translate(50px, 50px);\n          transform: translate(50px, 50px);\n}\n.rx-activity .layer-2-translate,\n.rx-activity .layer-4-translate,\n.rx-activity .layer-6-translate,\n.rx-activity .layer-8-translate {\n  -webkit-transform: translate(0px, -40px);\n          transform: translate(0px, -40px);\n}\n.rx-activity .layer-2-content,\n.rx-activity .layer-4-content,\n.rx-activity .layer-6-content,\n.rx-activity .layer-8-content {\n  width: 100px;\n  height: 100px;\n}\n.rx-activity .layer-2-content .shape-0,\n.rx-activity .layer-4-content .shape-0,\n.rx-activity .layer-6-content .shape-0,\n.rx-activity .layer-8-content .shape-0 {\n  position: absolute;\n  left: -7.5px;\n  top: -7.5px;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n}\n.rx-activity div {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.rx-activity .animation {\n  -webkit-animation-duration: 1.4s;\n          animation-duration: 1.4s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.rx-activity .layer-1-rotate {\n  -webkit-animation-name: rx-activity-layer-1-rotate;\n          animation-name: rx-activity-layer-1-rotate;\n}\n.rx-activity .layer-2-scale {\n  -webkit-animation-name: rx-activity-layer-2-scale;\n          animation-name: rx-activity-layer-2-scale;\n}\n.rx-activity .layer-3-rotate {\n  -webkit-animation-name: rx-activity-layer-3-rotate;\n          animation-name: rx-activity-layer-3-rotate;\n}\n.rx-activity .layer-4-scale {\n  -webkit-animation-name: rx-activity-layer-4-scale;\n          animation-name: rx-activity-layer-4-scale;\n}\n.rx-activity .layer-5-rotate {\n  -webkit-animation-name: rx-activity-layer-5-rotate;\n          animation-name: rx-activity-layer-5-rotate;\n}\n.rx-activity .layer-6-scale {\n  -webkit-animation-name: rx-activity-layer-6-scale;\n          animation-name: rx-activity-layer-6-scale;\n}\n.rx-activity .layer-7-rotate {\n  -webkit-animation-name: rx-activity-layer-7-rotate;\n          animation-name: rx-activity-layer-7-rotate;\n}\n.rx-activity .layer-8-scale {\n  -webkit-animation-name: rx-activity-layer-8-scale;\n          animation-name: rx-activity-layer-8-scale;\n}\n.rx-activity .shape-0 {\n  background-color: white;\n}\n.rx-activity.hidden {\n  visibility: hidden;\n}\n.rx-activity-extra-small {\n  width: 16px;\n  height: 16px;\n}\n.rx-activity-extra-small .layer-1-translate,\n.rx-activity-extra-small .layer-3-translate,\n.rx-activity-extra-small .layer-5-translate,\n.rx-activity-extra-small .layer-7-translate {\n  -webkit-transform: translate(8px, 8px);\n          transform: translate(8px, 8px);\n}\n.rx-activity-extra-small .layer-2-translate,\n.rx-activity-extra-small .layer-4-translate,\n.rx-activity-extra-small .layer-6-translate,\n.rx-activity-extra-small .layer-8-translate {\n  -webkit-transform: translate(0px, -6.4px);\n          transform: translate(0px, -6.4px);\n}\n.rx-activity-extra-small .layer-2-content,\n.rx-activity-extra-small .layer-4-content,\n.rx-activity-extra-small .layer-6-content,\n.rx-activity-extra-small .layer-8-content {\n  width: 16px;\n  height: 16px;\n}\n.rx-activity-extra-small .layer-2-content .shape-0,\n.rx-activity-extra-small .layer-4-content .shape-0,\n.rx-activity-extra-small .layer-6-content .shape-0,\n.rx-activity-extra-small .layer-8-content .shape-0 {\n  position: absolute;\n  left: -2px;\n  top: -2px;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n}\n.rx-activity-small {\n  width: 20px;\n  height: 20px;\n}\n.rx-activity-small .layer-1-translate,\n.rx-activity-small .layer-3-translate,\n.rx-activity-small .layer-5-translate,\n.rx-activity-small .layer-7-translate {\n  -webkit-transform: translate(10px, 10px);\n          transform: translate(10px, 10px);\n}\n.rx-activity-small .layer-2-translate,\n.rx-activity-small .layer-4-translate,\n.rx-activity-small .layer-6-translate,\n.rx-activity-small .layer-8-translate {\n  -webkit-transform: translate(0px, -8px);\n          transform: translate(0px, -8px);\n}\n.rx-activity-small .layer-2-content,\n.rx-activity-small .layer-4-content,\n.rx-activity-small .layer-6-content,\n.rx-activity-small .layer-8-content {\n  width: 20px;\n  height: 20px;\n}\n.rx-activity-small .layer-2-content .shape-0,\n.rx-activity-small .layer-4-content .shape-0,\n.rx-activity-small .layer-6-content .shape-0,\n.rx-activity-small .layer-8-content .shape-0 {\n  position: absolute;\n  left: -3px;\n  top: -3px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.rx-activity-medium {\n  width: 36px;\n  height: 36px;\n}\n.rx-activity-medium .layer-1-translate,\n.rx-activity-medium .layer-3-translate,\n.rx-activity-medium .layer-5-translate,\n.rx-activity-medium .layer-7-translate {\n  -webkit-transform: translate(18px, 18px);\n          transform: translate(18px, 18px);\n}\n.rx-activity-medium .layer-2-translate,\n.rx-activity-medium .layer-4-translate,\n.rx-activity-medium .layer-6-translate,\n.rx-activity-medium .layer-8-translate {\n  -webkit-transform: translate(0px, -14.4px);\n          transform: translate(0px, -14.4px);\n}\n.rx-activity-medium .layer-2-content,\n.rx-activity-medium .layer-4-content,\n.rx-activity-medium .layer-6-content,\n.rx-activity-medium .layer-8-content {\n  width: 36px;\n  height: 36px;\n}\n.rx-activity-medium .layer-2-content .shape-0,\n.rx-activity-medium .layer-4-content .shape-0,\n.rx-activity-medium .layer-6-content .shape-0,\n.rx-activity-medium .layer-8-content .shape-0 {\n  position: absolute;\n  left: -4.5px;\n  top: -4.5px;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n}\n@-webkit-keyframes rx-activity-layer-1-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(1, 0.2, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(1, 0.2, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-1-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(1, 0.2, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(1, 0.2, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-2-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  14.29% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  47.62% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  66.67% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-2-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  14.29% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  47.62% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  66.67% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-3-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.88, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.88, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-3-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.88, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.88, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-4-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  9.52% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  42.86% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  61.9% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-4-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  9.52% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  42.86% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  61.9% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-5-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.76, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.76, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-5-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.76, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.76, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-6-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  4.76% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  38.1% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  57.14% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-6-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  4.76% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  38.1% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  57.14% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-7-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.65, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.65, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-7-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.65, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.65, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-8-scale {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  33.33% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 1, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 1, 1);\n  }\n  52.38% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 0.78, 1);\n            animation-timing-function: cubic-bezier(0.8, 0, 0.78, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0, 1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-8-scale {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  33.33% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 1, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 1, 1);\n  }\n  52.38% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 0.78, 1);\n            animation-timing-function: cubic-bezier(0.8, 0, 0.78, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0, 1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n";
var ActivityIndicator = (function (_super) {
    __extends(ActivityIndicator, _super);
    function ActivityIndicator(props) {
        var _this = _super.call(this, props) || this;
        _this._isMounted = false;
        ActivityIndicator._installStyleSheet();
        _this.state = { isVisible: false };
        return _this;
    }
    ActivityIndicator._installStyleSheet = function () {
        // Have we installed the style sheet already?
        if (ActivityIndicator._isStyleSheetInstalled) {
            return;
        }
        // We set the CSS style sheet here to avoid the need
        // for users of this class to carry along another CSS
        // file.
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = _activityIndicatorCss;
        }
        else {
            style.appendChild(document.createTextNode(_activityIndicatorCss));
        }
        head.appendChild(style);
    };
    ActivityIndicator.prototype.componentDidMount = function () {
        var _this = this;
        this._isMounted = true;
        if (this.props.deferTime && this.props.deferTime > 0) {
            window.setTimeout(function () {
                if (_this._isMounted) {
                    _this.setState({ isVisible: true });
                }
            }, this.props.deferTime);
        }
        else {
            this.setState({ isVisible: true });
        }
    };
    ActivityIndicator.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    ActivityIndicator.prototype.render = function () {
        var colorStyle = {
            backgroundColor: this.props.color
        };
        var spinnerClasses = ['rx-activity'];
        if (this.props.size === 'tiny') {
            spinnerClasses.push('rx-activity-extra-small');
        }
        else if (this.props.size === 'small') {
            spinnerClasses.push('rx-activity-small');
        }
        else if (this.props.size === 'medium') {
            spinnerClasses.push('rx-activity-medium');
        }
        if (!this.state.isVisible) {
            spinnerClasses.push('hidden');
        }
        return (React.createElement("div", { className: spinnerClasses.join(' ') },
            React.createElement("div", { className: 'layer-7' },
                React.createElement("div", { className: 'layer-7-translate' },
                    React.createElement("div", { className: 'layer-7-rotate animation' },
                        React.createElement("div", { className: 'layer-8' },
                            React.createElement("div", { className: 'layer-8-translate' },
                                React.createElement("div", { className: 'layer-8-scale animation' },
                                    React.createElement("div", { className: 'layer-8-content ' },
                                        React.createElement("div", { className: 'shape shape-0', style: colorStyle })))))))),
            React.createElement("div", { className: 'layer-5' },
                React.createElement("div", { className: 'layer-5-translate' },
                    React.createElement("div", { className: 'layer-5-rotate animation' },
                        React.createElement("div", { className: 'layer-6' },
                            React.createElement("div", { className: 'layer-6-translate' },
                                React.createElement("div", { className: 'layer-6-scale animation' },
                                    React.createElement("div", { className: 'layer-6-content ' },
                                        React.createElement("div", { className: 'shape shape-0', style: colorStyle })))))))),
            React.createElement("div", { className: 'layer-3' },
                React.createElement("div", { className: 'layer-3-translate' },
                    React.createElement("div", { className: 'layer-3-rotate animation' },
                        React.createElement("div", { className: 'layer-4' },
                            React.createElement("div", { className: 'layer-4-translate' },
                                React.createElement("div", { className: 'layer-4-scale animation' },
                                    React.createElement("div", { className: 'layer-4-content ' },
                                        React.createElement("div", { className: 'shape shape-0', style: colorStyle })))))))),
            React.createElement("div", { className: 'layer-1' },
                React.createElement("div", { className: 'layer-1-translate' },
                    React.createElement("div", { className: 'layer-1-rotate animation' },
                        React.createElement("div", { className: 'layer-2' },
                            React.createElement("div", { className: 'layer-2-translate' },
                                React.createElement("div", { className: 'layer-2-scale animation' },
                                    React.createElement("div", { className: 'layer-2-content ' },
                                        React.createElement("div", { className: 'shape shape-0', style: colorStyle }))))))))));
    };
    ActivityIndicator._isStyleSheetInstalled = false;
    return ActivityIndicator;
}(React.Component));
exports.ActivityIndicator = ActivityIndicator;
exports.default = ActivityIndicator;
