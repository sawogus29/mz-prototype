import { Stack, Tabs, useFocusEffect } from 'expo-router';
import { useEffect } from 'react';
import { useAuth } from '../../../store/auth/auth-context';

export const unstable_settings = {
  initialRouteName: 'home',
};

export default function TabsLayout() {
  // const { user, unsetFirstTime } = useAuth();
  // useEffect(() => {
  //   if (user?.firstTime) unsetFirstTime();
  // }, [user?.firstTime]);
  return <Tabs />;
}
