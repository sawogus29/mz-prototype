import { Redirect, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

import WelcomeContent from '../../components/Welcome/WelcomeContent';
import { useAuth } from '../../store/auth/auth-context';

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
    router.replace('/(main)/(tabs)/statistic');
  };

  // Prevent Android BackButton from quitting
  // instead it redirects to home screen
  useEffect(() => {
    const subscribe = BackHandler.addEventListener('hardwareBackPress', () => {
      console.log('in back');
      router.replace('/(main)/(tabs)/home');
      return true;
    });

    return () => subscribe.remove();
  }, [BackHandler, router]);

  return (
    <WelcomeContent goHome={goHome} goShopRegistration={goShopRegistration} />
  );
}
