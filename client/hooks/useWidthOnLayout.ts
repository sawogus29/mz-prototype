import { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

/**
 * get width of a component.
 * width get updated when width of a component changes
 * @returns [width, layoutHandler]
 * - width: width of component
 * - layoutHandler: should be passed to onLayout prop of component
 */

export default function useWidthOnLayout(initialWidth?: number) {
  const [width, setWidth] = useState(initialWidth ?? 0);

  const layoutHandler = (e: LayoutChangeEvent) =>
    width !== e.nativeEvent.layout.width &&
    setWidth(e.nativeEvent.layout.width);

  return [width, layoutHandler] as const;
}
