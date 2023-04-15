import { View, StyleSheet } from 'react-native';
import { Button, ButtonProps } from '@rneui/themed';

import colors from '../../theme/colors';
import IconPlus from '../../assets/images/icon-circle-plus.svg';

/**
 * Card-shaped button width top plus icon.
 * NOTE: use containerStyle instaed of style
 */
export default function PlusCardButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      icon={
        <View>
          <IconPlus width={40} height={40} />
        </View>
      }
      iconPosition="top"
      color={colors.GREY800}
      style={styles.plus}
      buttonStyle={styles.plusButton}
      titleStyle={styles.plusText}
    />
  );
}

const styles = StyleSheet.create({
  plus: {
    flex: 1,
  },
  plusButton: {
    flex: 1,
  },
  plusText: {
    color: colors.GREY450,
    marginTop: 12,
  },
});
