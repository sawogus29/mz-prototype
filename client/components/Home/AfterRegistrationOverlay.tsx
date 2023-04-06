import { StyleSheet, View } from 'react-native';
import { Overlay, Text, Button } from '@rneui/themed';
import { usePathname, useRouter } from 'expo-router';

export default function AfterShopRegistrationOverlay() {
  const pathname = usePathname();
  const router = useRouter();

  const resetParam = () => {
    router.replace(pathname);
  };

  return (
    <Overlay
      overlayStyle={styles.container}
      isVisible
      onBackdropPress={resetParam}
    >
      <Text style={styles.title}>매장등록이 완료되었어요</Text>
      <Text style={styles.description}>
        폐디바이스에서 매장을 확인할 수 있어요.{'\n'}
        매장에 AI를 등록하고, 미어제트와 함께 {'\n'}
        매장을 관리해요!
      </Text>
      <Button
        titleStyle={styles.buttonTitle}
        title="확인"
        onPress={resetParam}
      />
    </Overlay>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
});
