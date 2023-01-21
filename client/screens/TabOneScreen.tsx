import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useQuery, gql } from '@apollo/client';

const HELLO_QUERY = gql`
  {
    hello
  }
`;

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const { loading, error, data } = useQuery(HELLO_QUERY);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello {data ? data.feed : '?'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
