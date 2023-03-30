import { Redirect, Stack, useRouter } from 'expo-router';

import WelcomeContent from '../../components/Welcome/WelcomeContent';
import { useReplaceExitWith } from '../../hooks/useReplaceExitWith';
import { useAuth } from '../../store/auth/auth-context';
import MeerzetLogo from '../../assets/images/logo_medium.svg';

export default function WelcomeScreen() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user?.firstTime) {
    return <Redirect href="/(main)/(tabs)/home" />;
  }

  const goHome = () => {
    router.replace('/(main)/(tabs)/home');
  };

  const goShopRegistration = () => {
    router.replace('/(main)/shop-registration');
  };

  useReplaceExitWith('/(main)/(tabs)/home');

  return (
    <>
      <Stack.Screen
        options={{ headerTitle: () => <MeerzetLogo width={120} height={20} /> }}
      />
      <WelcomeContent goHome={goHome} goShopRegistration={goShopRegistration} />
    </>
  );
}
