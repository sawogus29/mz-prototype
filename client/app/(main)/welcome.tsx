import { Redirect, Stack, useRouter } from 'expo-router';

import WelcomeContent from '../../components/Welcome/WelcomeContent';
import { useAuth } from '../../store/auth/auth-context';

export default function WelcomeScreen() {
  const { user } = useAuth();
  const router = useRouter();

  // if (!user?.firstTime) {
  //   return <Redirect href="/(main)/(tabs)/home" />;
  // }

  const goHome = () => {
    router.back();
  };

  const goShopRegistration = () => {
    router.replace('/(main)/shop-registration');
  };

  return (
    <>
      <WelcomeContent goHome={goHome} goShopRegistration={goShopRegistration} />
    </>
  );
}
