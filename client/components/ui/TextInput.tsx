import {
  StyleSheet,
  TextInput as BaseTextInput,
  TextInputProps,
} from 'react-native';
import { useRef, useState } from 'react';
import colors from '../../theme/colors';
import { defaultFontFamily } from '../../theme';

export default function TextInput(props: TextInputProps) {
  const [focoused, setFocused] = useState(false);
  const disabled = !(props.editable === undefined || props.editable === true);

  return (
    <BaseTextInput
      {...props}
      style={[
        styles.input,
        //@ts-expect-error
        { outline: 'transparent' }, // for web
        focoused && styles.focusedInput,
        props.style,
      ]}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChangeText={(text) => {
        props.onChangeText && props.onChangeText(text);
      }}
      placeholderTextColor={colors.GREY500}
      disabled={disabled} // for web
    />
  );
}

const styles = StyleSheet.create({
  focusedInput: {
    borderColor: colors.AI_BLUE,
  },
  input: {
    // backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 12,
    // width: '100%',
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.GREY600,
    fontFamily: defaultFontFamily,
  },
});
