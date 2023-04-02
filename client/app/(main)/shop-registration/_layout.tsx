import { Stack } from 'expo-router';
import SkipLink from '../../../components/ui/SkipLink';

export default function ShopRegistrationLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        animation: 'none',
        headerTitle: '',
      }}
    >
      <Stack.Screen name="image" options={{ headerRight: SkipLink }} />
    </Stack>
  );
}
