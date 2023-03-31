import React from 'react';
import { Text } from '@rneui/themed';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import CheckedIcon from '../../assets/images/icon-checked.svg';
import UncheckedIcon from '../../assets/images/icon-unchecked.svg';

interface CheckBoxProps {
  title: string;
  checked?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export default function CheckBox({
  title,
  checked,
  containerStyle,
  onPress,
}: CheckBoxProps) {
  const Icon = checked ? CheckedIcon : UncheckedIcon;

  return (
    <Pressable onPress={onPress} style={[containerStyle, styles.container]}>
      <Icon width={16} height={16} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#5A617C',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 8,
  },
});
