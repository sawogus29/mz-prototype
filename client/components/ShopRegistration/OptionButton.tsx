import { StyleSheet } from 'react-native';
import { Button, ButtonProps } from '@rneui/themed';
import colors from '../../theme/colors';

export default function OptionButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      type="clear"
      containerStyle={styles.container}
      buttonStyle={styles.button}
      titleStyle={styles.title}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.GREY000,
  },
});
