import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import Constants from 'expo-constants';
import { SplashScreen, Slot, useRouter, Redirect } from 'expo-router';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

import { AuthProvider } from '../store/auth/auth-context';
import { PermissionGuard } from '../components/Permission/PermissionGuard';
import useCachedResources from '../hooks/useCachedResources';
import theme from '../theme';

const httpLink = createHttpLink({
  uri: Constants.expoConfig!.extra!.API_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <SplashScreen />;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <PermissionGuard>
            <AuthProvider>
              <StatusBar />
              <Slot />
            </AuthProvider>
          </PermissionGuard>
        </SafeAreaProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
