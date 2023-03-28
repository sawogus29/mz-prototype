import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Text } from '@rneui/themed';
import { SvgProps } from 'react-native-svg';

interface PermissionItemProps {
  IconComponent: React.FC<SvgProps>;
  title: string;
  description: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function PermissionItem({
  IconComponent,
  title,
  description,
  containerStyle,
}: PermissionItemProps) {
  return (
    <View style={[styles.item, containerStyle]}>
      <IconComponent width={24} height={24} style={styles.icon} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
  },
  textContainer: {},
});
