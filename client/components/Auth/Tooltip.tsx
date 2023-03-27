import { Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

import scale from './scale';

interface TooltipProps {
  title: string;
}

export default function Tooltip({ title }: TooltipProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tooltip}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.pointer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltip: {
    // zIndex: 1,
    width: 184 * scale,
    height: 44 * scale,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100 * scale,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0 * scale,
      height: 2 * scale,
    },
    shadowRadius: 8 * scale,
    shadowOpacity: 1,
    elevation: 8,
  },
  pointer: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 8 * scale,

    borderRightWidth: 16 * scale,
    borderRightColor: '#fff',

    borderBottomWidth: 8 * scale,
    borderBottomColor: 'transparent',

    marginLeft: -8 * scale,
    bottom: -8 * scale,
    transform: [{ rotate: '270deg' }],
  },
  title: {
    fontSize: 14 * scale,
  },
});
