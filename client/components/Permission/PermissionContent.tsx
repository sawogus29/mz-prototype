import { Text, Button } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconBell from '../../assets/images/icon-bell.svg';
import IconCamera from '../../assets/images/icon-camera.svg';
import colors from '../../theme/colors';
import TitleButtonLayout from '../ui/TitleButtonLayout';
import PermissionItem from './PermissionItem';

interface PermissionContentProps {
  requestPermissions: () => void;
}

export default function PermissionContent(props: PermissionContentProps) {
  return (
    <SafeAreaView style={styles.container}>
      <TitleButtonLayout title="앱 접근권한 안내" buttonTitle="확인">
        <Text style={styles.description}>
          앱 사용을 위해 권한을 허용해주세요.{'\n'}꼭 필요한 권한들만 담았어요.
        </Text>
        <PermissionItem
          IconComponent={IconBell}
          title="알림"
          description="AI 감지 결과, 이벤트, 서비스 관련 혜택 알림을 받을 수 있습니다."
          containerStyle={styles.item}
        />
        <PermissionItem
          IconComponent={IconCamera}
          title="카메라"
          description="매장 대표이미지 등록에 카메라 및 앨범을 사용합니다."
        />
        <Text style={styles.footer}>
          {
            '※ 설정 > 애플리케이션 > 미어제트 > 권한 메뉴에서도 설정하실 수 있습니다.'
          }
        </Text>
      </TitleButtonLayout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  description: {
    marginBottom: 44,
    fontSize: 16,
    fontWeight: '400',
    color: colors.GREY200,
  },
  item: {
    marginBottom: 24,
  },
  footer: { marginTop: 32, fontSize: 14, color: colors.GREY400 },
});
