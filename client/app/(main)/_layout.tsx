import { Stack } from 'expo-router';
import MeerzetLogo from '../../assets/images/logo_medium.svg';

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => <MeerzetLogo width={120} height={20} />,
        headerShadowVisible: false,
      }}
    />
  );
}
