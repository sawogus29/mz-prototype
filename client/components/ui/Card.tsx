import { View, ViewProps, StyleSheet, Platform } from 'react-native';
import colors from '../../theme/colors';

export default function Card({ style, ...props }: ViewProps) {
  return (
    <View {...props} style={[styles.container, style]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GREY900,
    borderRadius: 12,
    shadowColor:
      Platform.OS == 'android' ? colors.GREY000 : 'rgba(0, 0, 0, 0.16)',
    shadowRadius: 4,
    elevation: 3,
  },
});
