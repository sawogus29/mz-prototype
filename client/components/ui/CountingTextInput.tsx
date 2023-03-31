import {
  Text,
  StyleSheet,
  TextInput,
  Platform,
  View,
  TextInputProps,
} from 'react-native';
import { Input } from '@rneui/themed';
import { useRef, useState } from 'react';
import colors from '../../theme/colors';
import { defaultFontFamily } from '../../theme';

export interface CountingTextInputProps extends TextInputProps {
  maxLength: number;
}

export default function CountingTextInput(props: CountingTextInputProps) {
  const [enteredText, setEnteredText] = useState('');
  const [focoused, setFocused] = useState(false);
  const { maxLength } = props;

  return (
    <>
      <View style={styles.containerStyle}>
        <TextInput
          {...props}
          style={[
            styles.input,
            //@ts-ignore
            { outline: 'transparent' }, // for web
            focoused && styles.focusedInput,
            props.style,
          ]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={(text) => {
            props.onChangeText && props.onChangeText(text);
            setEnteredText(text);
          }}
          placeholderTextColor={colors.GREY500}
        />
        <Text style={styles.counterText}>
          {enteredText.length}/{maxLength}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  focusedInput: {
    borderColor: colors.AI_BLUE,
  },
  input: {
    // backgroundColor: 'red',
    paddingVertical: 10,
    paddingLeft: 12,
    paddingRight: 50,
    width: '100%',
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.GREY600,
    fontFamily: defaultFontFamily,
  },
  counterText: {
    // backgroundColor: 'blue',
    marginLeft: -42,
    fontSize: 14,
    color: colors.GREY400,
  },
});
