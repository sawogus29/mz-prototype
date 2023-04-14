import { StyleSheet, ViewProps } from 'react-native';

import colors from '../../theme/colors';
import Tooltip from '../ui/Tooltip';
import useLeftAsCenter from '../../hooks/useLeftAsCenter';

interface ProgressTooltipProps extends ViewProps {
  leftSpace: number;
  rightSpace: number;
  stickOut?: number;
  highlight?: boolean;
}

export default function ProgressTooltip({
  leftSpace,
  rightSpace,
  stickOut,
  highlight,
  children,
  ...props
}: ProgressTooltipProps) {
  stickOut = stickOut ?? 0;
  const [Container, contentStyle, contentLayoutHandler] = useLeftAsCenter(
    leftSpace,
    rightSpace,
    stickOut
  );
  const backgroundColor = highlight ? colors.AI_BLUE : colors.GREY300;

  return (
    <Container>
      <Tooltip
        style={contentStyle}
        onLayout={contentLayoutHandler}
        backgroundColor={backgroundColor}
      >
        {children}
      </Tooltip>
    </Container>
  );
}

const styles = StyleSheet.create({});
