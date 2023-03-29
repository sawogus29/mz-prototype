import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Icon, Text } from '@rneui/themed';
import { Image, StyleSheet, View } from 'react-native';
import IconNaver from '../../assets/images/icon-naver.svg';
import IconApple from '../../assets/images/icon-apple.svg';
import MeerzetLogo from '../../assets/images/logo_big.svg';

import scale from './scale';
import Tooltip from './Tooltip';
import SignInButton from './SignInButton';
import colors from '../../theme/colors';
import { useAuth } from '../../store/auth/auth-context';

export default function SignInContent() {
  const { signIn } = useAuth();
  return (
    <>
      <Image
        source={require('../../assets/images/signin-background-gradient.png')}
        style={styles.backgroundGradient}
      />
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
          <MeerzetLogo
            width={200 * scale}
            height={35 * scale}
            style={styles.logo}
          />
          <Text style={styles.description}>
            미어제트만 믿으세요.{'\n'}
            책임지고 매장을 지켜볼게요.
          </Text>
          <Image
            style={styles.backgroundImage}
            source={require('../../assets/images/signin-background.png')}
          />
          <View style={styles.buttonContainer}>
            <Tooltip title="⚡️3초만에 빠른 회원가입" />
            <SignInButton
              title="네이버로 계속하기"
              IconComponent={IconNaver}
              backgroundColor="#03c75a"
              onPress={() => signIn()}
            />
            <SignInButton
              title="Apple로 계속하기"
              IconComponent={IconApple}
              backgroundColor="#000000"
              onPress={() => signIn()}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: 527 * scale,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    padding: 0,
  },
  container: {
    width: '100%',
    maxWidth: 600 * scale,
    paddingTop: 60 * scale,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  logo: {
    marginBottom: 15 * scale,
    // resizeMode: 'contain',
  },
  description: {
    fontSize: 18 * scale,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 1.5 * 18 * scale,
    color: colors.GREY300,
    textShadowColor: colors.GREY300,
    textShadowOffset: { width: 0.5, height: 0 },
    textShadowRadius: 0.1,
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
});
