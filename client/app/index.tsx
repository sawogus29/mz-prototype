import { Redirect } from 'expo-router';
import { Text } from 'react-native';

export default function IndexScreen() {
  // There seems to be a BUG in expo-router
  // <Redirect />, also router.redirect(), do not clear 'Root Navigation State' properly.
  // And it causes infinite loop when user try to exit.
  //
  // TEMPORARY FIX => I manually cleared 'Root Navigation State' at home.tsx
  // return <Redirect href="/(main)/home" />;
  return <Redirect href="/(main)/welcome" />;
}
