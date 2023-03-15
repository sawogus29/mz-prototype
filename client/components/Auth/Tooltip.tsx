import { Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

interface TooltipProps {
  title: string;
}

export default function Tooltip({ title }: TooltipProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tooltip}>
        <Text>{title}</Text>
      </View>
      <View style={styles.pointer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  tooltip: {
    // zIndex: 1,
    width: 184,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 8,
  },
  pointer: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 8,

    borderRightWidth: 16,
    borderRightColor: '#fff',

    borderBottomWidth: 8,
    borderBottomColor: 'transparent',

    left: '50%',
    marginLeft: -8,
    bottom: -8,
    transform: [{ rotate: '270deg' }],
  },
});
