import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    />
  );
}
