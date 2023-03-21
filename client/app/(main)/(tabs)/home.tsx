import { Text, View, StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const HELLO_QUERY = gql`
  {
    hello
  }
`;

export default function TabOneScreen() {
  const { loading, error, data } = useQuery(HELLO_QUERY);
  return (
    <View>
      <Text>Hello {data ? data.hello : '?'}</Text>
    </View>
  );
}
