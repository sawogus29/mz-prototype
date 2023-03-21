import { Redirect } from 'expo-router';
import { Text } from 'react-native';

export default function IndexScreen() {
  // return <Text>hi</Text>;
  return <Redirect href="/(main)/(tabs)/home" />;
}
