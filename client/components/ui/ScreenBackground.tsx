import { StyleSheet, View, ViewProps } from 'react-native';
import colors from '../../theme/colors';

export default function ScreenBackground(props: ViewProps) {
  return <View {...props} style={[styles.background, props.style]} />;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.GREY900,
  },
});
