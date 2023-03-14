import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from '@rneui/themed';

export default function SignInContent() {
  return (
    <SafeAreaView>
      <Text>SignIn Content</Text>
      <Button title={'hello'} />
    </SafeAreaView>
  );
}
