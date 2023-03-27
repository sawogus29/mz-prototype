import { Button } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

import scale from './scale';

interface SignInButtonProps {
  IconComponent: React.FC<SvgProps>;
  title: string;
  backgroundColor: string;
  onPress?: () => void;
}

export default function SignInButton({
  IconComponent,
  title,
  backgroundColor,
  onPress,
}: SignInButtonProps) {
  return (
    <Button
      titleStyle={styles.buttonTitle}
      buttonStyle={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <IconComponent
        width={15 * scale}
        height={15 * scale}
        style={styles.buttonIcon}
      />
      {title}
    </Button>
  );
}
const styles = StyleSheet.create({
  button: {
    paddingVertical: 11 * scale,
    marginBottom: 12 * scale,
  },
  buttonTitle: {
    fontSize: 18 * scale,
  },
  buttonIcon: {
    marginRight: 8 * scale,
  },
});
