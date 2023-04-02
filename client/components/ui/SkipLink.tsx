import { Link } from 'expo-router';
import { StyleSheet, Platform, View } from 'react-native';
import { Text } from '@rneui/themed';

import colors from '../../theme/colors';

export default function SkipLink() {
  return (
    <Link
      href="/(main)/(tabs)/home"
      style={[Platform.OS === 'web' && styles.link]}
      replace
    >
      <Text style={styles.text}>건너뛰기</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.AI_BLUE,
  },
});
