import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Icon, Text } from '@rneui/themed';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import Tooltip from './Tooltip';

export default function SignInContent() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          zIndex: -1,
          width: '100%',
          height: '100%',
        }}
        source={require('../../assets/images/signin-background.png')}
      />
      <View style={styles.buttonContainer}>
        <Tooltip title="⚡️3초만에 빠른 회원가입" />
        <Button
          containerStyle={{ marginBottom: 12 }}
          buttonStyle={[styles.button, styles.naverButton]}
        >
          {/* <Icon name="save" color="white" containerStyle={{ marginRight: 5 }} /> */}
          네이버로 계속하기
        </Button>
        <Button
          title={'Apple로 계속하기'}
          buttonStyle={[styles.button, styles.appleButton]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  buttonContainer: {
    // marginBottom: 76,
    margin: 16,
  },
  button: {
    paddingVertical: 11,
  },
  naverButton: {
    backgroundColor: '#03c75a',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
});
