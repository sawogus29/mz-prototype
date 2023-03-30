import { Redirect, useRouter } from 'expo-router';
import { useEffect } from 'react';

import WelcomeContent from '../../components/Welcome/WelcomeContent';
import { useAuth } from '../../store/auth/auth-context';

export default function WelcomeScreen() {
  const { user, unsetFirstTime } = useAuth();
  const router = useRouter();

  if (!user?.firstTime) {
    return <Redirect href="/(main)/(tabs)/home" />;
  }

  const goHome = () => {
    unsetFirstTime();
  };

  const goShopRegistration = () => {
    unsetFirstTime();
    router.replace('/(main)/(tabs)/statistic');
  };

  return (
    <WelcomeContent goHome={goHome} goShopRegistration={goShopRegistration} />
  );
}
