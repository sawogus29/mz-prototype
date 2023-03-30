import { Button } from '@rneui/themed';
import { Redirect, useRouter } from 'expo-router';
import { Text, View, Image, StyleSheet } from 'react-native';

import { useAuth } from '../../store/auth/auth-context';
import colors from '../../theme/colors';

export default function WelcomeContent() {
  const router = useRouter();
  const { unsetFirstTime } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.contentContainer}>
          <Image
            source={require('../../assets/images/image-welcome.png')}
            style={styles.image}
          />
          <Text style={styles.title}>회원가입을 축하드려요!</Text>
          <Text style={styles.description}>
            관리가 필요한 무인매장이 있으신가요?{'\n'}
            매장을 등록하면 AI 매장관리를 받으실 수 있어요.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="네, 매장을 등록할게요."
            containerStyle={styles.yesButtonContainer}
            buttonStyle={styles.yesButton}
            titleStyle={styles.yesButtonTitle}
            onPress={() => {
              unsetFirstTime();
              router.replace('/(main)/(tabs)/statistic');
            }}
          />
          <Button
            title="지금은 괜찮아요."
            type="clear"
            buttonStyle={styles.noButton}
            titleStyle={styles.noButtonTitle}
            onPress={() => unsetFirstTime()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.GREY900,
  },
  innerContainer: {
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
  },
  contentContainer: {
    width: '100%',
    marginBottom: 'auto',
  },
  image: {
    width: '100%',
    // height: 400,
    maxHeight: 400,
    resizeMode: 'contain',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.GREY300,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 60,
    // rowGap: 8,
  },
  yesButtonContainer: {
    marginBottom: 8,
  },
  yesButton: {
    paddingVertical: 16,
  },
  yesButtonTitle: {
    fontWeight: '700',
  },
  noButton: {
    paddingVertical: 8,
  },
  noButtonTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.GREY000,
  },
});
