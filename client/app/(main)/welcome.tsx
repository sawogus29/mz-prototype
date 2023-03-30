import { Redirect } from 'expo-router';

import WelcomeContent from '../../components/Welcome/WelcomeContent';
import { useAuth } from '../../store/auth/auth-context';

export default function WelcomeScreen() {
  const { user } = useAuth();

  if (!user?.firstTime) {
    return <Redirect href="/(main)/(tabs)/home" />;
  }

  return <WelcomeContent />;
}
