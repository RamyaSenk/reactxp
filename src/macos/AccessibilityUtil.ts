/**
 * AccessibilityUtil.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * MacOS-specific accessibility utils.
 */

import * as React from 'react';
import * as RN from 'react-native';

import { AccessibilityPlatformUtil } from '../common/AccessibilityUtil';
import Accessibility from '../native-common/Accessibility';

export class AccessibilityUtil extends AccessibilityPlatformUtil {
    setAccessibilityFocus(component: React.Component<any, any>): void {
        if (Accessibility.isScreenReaderEnabled() && RN.AccessibilityInfo && RN.AccessibilityInfo.setAccessibilityFocus) {
            const nodeHandle = RN.findNodeHandle(component);

            if (nodeHandle) {
                RN.AccessibilityInfo.setAccessibilityFocus(nodeHandle);
            } else {
                console.warn('Could not find node handle to set accessibility focus.');
            }
        }
    }
}

export default new AccessibilityUtil();
