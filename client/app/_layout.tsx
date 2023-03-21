import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import Constants from 'expo-constants';
import { SplashScreen, Slot, useRouter, Redirect } from 'expo-router';

import PermissionContent from '../components/Permission/PermissionContent';
import useCachedResources from '../hooks/useCachedResources';
import theme from '../theme';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { Platform } from 'react-native';
import { AuthProvider } from '../store/auth/auth-context';

const httpLink = createHttpLink({
  uri: Constants.expoConfig!.extra!.API_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  const isLoadingComplete = useCachedResources();
  const hasPermissions = false;
  const isAuthenticated = false;

  if (!isLoadingComplete) {
    return <SplashScreen />;
  }

  // if (['android', 'ios'].includes(Platform.OS) && !hasPermissions) {
  //   return <Redirect href="/(permission)" />;
  // }

  // if (!isAuthenticated) {
  //   return <Redirect href="/(auth)/signin" />;
  // }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <AuthProvider>
            <StatusBar />
            <Slot />
          </AuthProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
