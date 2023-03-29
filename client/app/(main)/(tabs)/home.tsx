import { Text, View, StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { useAuth } from '../../../store/auth/auth-context';
import { Redirect } from 'expo-router';

const HELLO_QUERY = gql`
  {
    hello
  }
`;

export default function TabOneScreen() {
  const { user } = useAuth();
  console.log(user);
  if (user?.firstTime) {
    return <Redirect href="/(main)/welcome" />;
  }

  const { loading, error, data } = useQuery(HELLO_QUERY);
  return (
    <View>
      <Text>Hello {data ? data.hello : '?'}</Text>
    </View>
  );
}
