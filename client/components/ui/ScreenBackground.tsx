import { ScrollView, StyleSheet, View, ViewProps } from 'react-native';
import colors from '../../theme/colors';

interface ScreenBackgroundProps extends ViewProps {
  scroll?: boolean;
}

export default function ScreenBackground({
  scroll,
  ...props
}: ScreenBackgroundProps) {
  return scroll ? (
    <ScrollView
      {...props}
      style={styles.background}
      contentContainerStyle={styles.contentContainer}
    />
  ) : (
    <View
      {...props}
      style={[styles.background, styles.contentContainer, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.GREY900,
  },
  contentContainer: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});
