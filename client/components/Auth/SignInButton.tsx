import { Button } from '@rneui/themed';
import { ReactElement } from 'react';

interface SignInButtonProps {
  iconComponent: ReactElement;
  title: string;
  onPress: () => void;
}

export default function SignInButton({
  iconComponent,
  title,
  onPress,
}: SignInButtonProps) {
  return (
    <Button containerStyle={{ marginBottom: 12 }}>
      {iconComponent}
      {title}
    </Button>
  );
}
