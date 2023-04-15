import { Stack, Tabs, useFocusEffect } from 'expo-router';
import { useEffect } from 'react';
import { useAuth } from '../../../store/auth/auth-context';
import { View } from 'react-native';

export const unstable_settings = {
  initialRouteName: 'home',
};

export default function TabsLayout() {
  // const { user, unsetFirstTime } = useAuth();
  // useEffect(() => {
  //   if (user?.firstTime) unsetFirstTime();
  // }, [user?.firstTime]);
  return (
    // added <View> to fix 'SCROLLBAR APPEARING BUG' in web browser
    <View style={{ flex: 1, overflow: 'hidden' }}>
      <Tabs />
    </View>
  );
}
