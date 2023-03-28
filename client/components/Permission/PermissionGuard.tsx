import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useRouter, useSegments } from 'expo-router';
import { useCameraPermissions } from 'expo-image-picker';
import { usePermissions as useNotificationPermission } from 'expo-notifications';

import PermissionContent from './PermissionContent';

export function PermissionGuard(props: React.PropsWithChildren) {
  const [cameraStatus, requestCameraPermission] = useCameraPermissions();
  const [notificationStatus, requestNotificationPermission] =
    useNotificationPermission();
  const hasAllPerms = cameraStatus?.granted && notificationStatus?.granted;
  // const hasAllPerms = false;

  if (!hasAllPerms) {
    return (
      <PermissionContent
        requestPermissions={() => {
          requestCameraPermission();
          requestNotificationPermission();
        }}
      />
    );
  }

  return <>{props.children}</>;
}
