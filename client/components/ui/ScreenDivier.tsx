import { useWindowDimensions } from 'react-native';
import { Divider, DividerProps } from '@rneui/themed';

export default function ScreenDivider(props: DividerProps) {
  const { width } = useWindowDimensions();
  const style = { width };
  return <Divider {...props} style={[style, props.style]} width={12} />;
}
