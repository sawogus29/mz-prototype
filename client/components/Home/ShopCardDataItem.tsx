import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from '@rneui/themed';
import colors from '../../theme/colors';

interface ShopCardDataItemProps {
  title: string;
  amount: number;
  unit: string;
  highlight?: boolean;
}

export default function ShopCardDataItem({
  title,
  amount,
  unit,
  highlight,
}: ShopCardDataItemProps) {
  const hStyles = !highlight
    ? normalStyles
    : amount > 0
    ? highlightedStyles
    : unhighlightedStyles;

  return (
    <View style={[styles.container, hStyles.container]}>
      <Text caption2 style={[styles.title, hStyles.title]}>
        {title}:
      </Text>
      <Text body3 style={[styles.data, hStyles.data]}>
        {amount} {unit}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {},
  data: {},
});

const normalStyles = StyleSheet.create({
  container: {},
  title: { color: colors.GREY400 },
  data: { color: colors.GREY000 },
});

const highlightedStyles = StyleSheet.create({
  container: { backgroundColor: colors.AI_BLUE },
  title: { color: colors.GREY700 },
  data: { color: colors.GREY900 },
});

const unhighlightedStyles = StyleSheet.create({
  container: { backgroundColor: colors.GREY600 },
  title: { color: colors.GREY900 },
  data: { color: colors.GREY900 },
});
