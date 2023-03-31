import { Text } from '@rneui/themed';
import CountingTextInput, {
  CountingTextInputProps,
} from '../ui/CountingTextInput';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import colors from '../../theme/colors';

interface LabeledCountingTextInputProps extends CountingTextInputProps {
  label: string;
  caution?: string;
  showCaution?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  style?: never;
}

export default function LabledCountingTextInput({
  label,
  caution,
  showCaution,
  containerStyle,
  ...textInputProps
}: LabeledCountingTextInputProps) {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <CountingTextInput
        {...textInputProps}
        style={showCaution && styles.textInputCaution}
      />
      {showCaution && <Text style={styles.caution}>{caution}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 5,
  },
  caution: {
    color: colors.DANGEROUS,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 12,
    marginTop: 8,
  },
  textInputCaution: {
    borderColor: colors.DANGEROUS,
  },
});
