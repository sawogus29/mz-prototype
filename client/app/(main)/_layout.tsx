import { Stack } from 'expo-router';
import MeerzetLogo from '../../assets/images/logo_medium.svg';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function MainLayout() {
  return (
    <Stack
      initialRouteName="(tabs)"
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerBackVisible: false, // headerBackVisible option DO NOT WORK in Web
        headerTitle: () => <MeerzetLogo width={120} height={20} />,
      }}
    >
      <Stack.Screen name="welcome" options={{ headerShown: true }} />
    </Stack>
  );
}
