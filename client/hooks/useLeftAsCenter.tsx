import { View, ViewProps } from 'react-native';

import useWidthOnLayout from './useWidthOnLayout';

function calcBoundedLeft(
  leftSpace: number,
  rightSpace: number,
  stickOut: number,
  width: number
) {
  // not ennough left space
  if (width / 2 > leftSpace + stickOut) {
    return width / 2 - stickOut;
  }

  // not enough right space
  if (width / 2 > rightSpace + stickOut) {
    return leftSpace + rightSpace - width / 2 + stickOut;
  }

  return leftSpace;
}

/**
 * @param leftSpace
 * @param rightSpace
 * @param stickOut: Content sticks out beyond boundary as much as this value. If this value is ommited, Content cannot pass boundary.
 * @returns [Container, contentStyle, contentLayoutHandler]
 * - Container: Conatiner Component
 * - contentStyle: should be passed to 'style' prop of Content Component
 * - contentLayoutHandler: should be passed to 'onLayout' prop of Content Component
 * @example
 * ```
 * Content Component is positioned at the leftSpace,
 * while aligned center based on the leftSpace
 *                           ┌---------┐
 *                           | Content |
 *                           └---------┘
 *    |--------(leftSpace)--------|----(rightSpace)------|
 * boundary                                           boundary
 * ```
 */
export default function useLeftAsCenter(
  leftSpace: number,
  rightSpace: number,
  stickOut?: number
) {
  stickOut = stickOut ?? 0;
  // for content
  const [contentWidth, contentLayoutHandler] = useWidthOnLayout(20);
  const contentStyle = { marginLeft: -contentWidth / 2 }; // for centering

  // for container
  const containerStyle = {
    left: calcBoundedLeft(leftSpace, rightSpace, stickOut, contentWidth),
  };

  const Container = ({ style, ...props }: ViewProps) => (
    <View {...props} style={[containerStyle, style]} />
  );

  return [Container, contentStyle, contentLayoutHandler] as const;
}
