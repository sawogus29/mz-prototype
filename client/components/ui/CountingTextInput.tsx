import { Text, StyleSheet, View, TextInputProps } from 'react-native';
import { useState } from 'react';
import colors from '../../theme/colors';
import { defaultFontFamily } from '../../theme';
import TextInput from './TextInput';

export interface CountingTextInputProps extends TextInputProps {
  maxLength: number;
}

export default function CountingTextInput(props: CountingTextInputProps) {
  const [enteredText, setEnteredText] = useState('');
  const { maxLength } = props;

  return (
    <View style={styles.containerStyle}>
      <TextInput
        {...props}
        style={[
          styles.input,
          //@ts-ignore
          props.style,
        ]}
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
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    // backgroundColor: 'red',
    width: '100%',
    paddingRight: 50,
  },
  counterText: {
    // backgroundColor: 'blue',
    marginLeft: -42,
    fontSize: 14,
    color: colors.GREY400,
  },
});
