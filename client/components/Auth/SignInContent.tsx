import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Icon, Text } from '@rneui/themed';
import { Image, StyleSheet, View } from 'react-native';

import scale from './scale';
import Tooltip from './Tooltip';

export default function SignInContent() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo_big.png')}
        />
        <Text style={styles.description}>미어제트만 믿으세요.</Text>
        <Text style={styles.description}>책임지고 매장을 지켜볼게요.</Text>
        <Image
          style={styles.backgroundImage}
          source={require('../../assets/images/signin-background.png')}
        />
        <View style={styles.buttonContainer}>
          <Tooltip title="⚡️3초만에 빠른 회원가입" />
          <Button
            titleStyle={styles.buttonTitle}
            buttonStyle={[styles.button, styles.naverButton]}
          >
            {/* <Icon name="save" color="white" containerStyle={{ marginRight: 5 }} /> */}
            네이버로 계속하기
          </Button>
          <Button
            title={'Apple로 계속하기'}
            titleStyle={styles.buttonTitle}
            buttonStyle={[styles.button, styles.appleButton]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 0,
  },
  container: {
    width: '100%',
    maxWidth: 600 * scale,
    paddingTop: 60 * scale,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  logo: {
    width: 200 * scale,
    height: 35 * scale,
    marginBottom: 15 * scale,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 18 * scale,
    fontWeight: '600',
    textAlign: 'center',
  },
  backgroundImage: {
    marginBottom: -70 * scale,
    width: 630 * scale,
    height: 420 * scale,
    resizeMode: 'cover',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16 * scale,
    color: '#5a617c',
  },
  button: {
    paddingVertical: 11 * scale,
    marginBottom: 12 * scale,
  },
  buttonTitle: {
    fontSize: 18 * scale,
  },
  naverButton: {
    backgroundColor: '#03c75a',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
});
