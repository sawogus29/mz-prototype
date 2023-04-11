import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'expo-router';

const HELLO_QUERY = gql`
  {
    hello
  }
`;

export default function HomeContent() {
  const { loading, error, data } = useQuery(HELLO_QUERY);
  return (
    <View>
      <Link href="/(main)/shop-registration">
        <Text h1>매장등록</Text>
      </Link>
      <Text>Hello {data ? data.hello : '?'}</Text>
      <Text bigTitle>bigTitle</Text>
      <Text headline1>headline1</Text>
    </View>
  );
}
