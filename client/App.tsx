import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import Constants from 'expo-constants';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import theme from './theme';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: Constants.expoConfig!.extra!.API_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
