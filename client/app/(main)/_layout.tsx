import { Stack } from 'expo-router';
import { View } from 'react-native';
import MeerzetLogo from '../../assets/images/logo_medium.svg';
import colors from '../../theme/colors';

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        // headerTitle: () => <MeerzetLogo width={120} height={20} />,
        header: () => (
          <View style={{ padding: 16, backgroundColor: colors.GREY900 }}>
            <MeerzetLogo width={120} height={20} style={{}} />
          </View>
        ),
      }}
    />
  );
}
