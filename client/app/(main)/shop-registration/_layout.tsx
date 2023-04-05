import { Stack } from 'expo-router';
import SkipLink from '../../../components/ui/SkipLink';
import { ShopProfileProvider } from '../../../store/shop-profile/shop-profile-context';

export default function ShopRegistrationLayout() {
  return (
    <ShopProfileProvider>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          animation: 'none',
          headerTitle: '',
        }}
      >
        <Stack.Screen name="image" options={{ headerRight: SkipLink }} />
      </Stack>
    </ShopProfileProvider>
  );
}
