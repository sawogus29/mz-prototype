import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import colors from '../../theme/colors';

interface TooltipProps extends ViewProps {
  squareStyle?: StyleProp<ViewStyle>;
  pointerStyle?: StyleProp<ViewStyle>;
  pointerSize?: number;
  backgroundColor?: string;
}

export default function Tooltip({
  squareStyle,
  pointerStyle,
  backgroundColor,
  pointerSize = 10,
  children,
  ...props
}: TooltipProps) {
  const pointerColorSizeStyle = {
    borderLeftWidth: pointerSize / 2,
    borderRightWidth: pointerSize / 2,
    borderTopWidth: pointerSize,
    borderTopColor: backgroundColor ?? colors.GREY300,
  };

  return (
    <View {...props} style={[styles.container, props.style]}>
      <View style={[styles.square, { backgroundColor }, squareStyle]}>
        {children}
      </View>
      <View style={[styles.pointer, pointerColorSizeStyle, pointerStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  square: {
    backgroundColor: colors.GREY300,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  pointer: {
    width: 0,
    height: 0,
    borderColor: 'transparent',
  },
});
