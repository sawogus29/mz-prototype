import { useState } from 'react';
import { LayoutChangeEvent, ViewStyle } from 'react-native';

export default function useGrid(
  numColumns: number,
  columnGap: number,
  rowGap: number | undefined
): [(e: LayoutChangeEvent) => void, ViewStyle, ViewStyle] {
  const [width, setWidth] = useState(360);

  const gridLayoutHandler = (e: LayoutChangeEvent) =>
    setWidth(e.nativeEvent.layout.width);

  const gridStyle: ViewStyle = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap,
    rowGap,
  };

  const gridItemStyle: ViewStyle = {
    flexBasis: Math.floor(
      (width - (numColumns - 1) * columnGap) / (numColumns + 0.5)
    ),
    flexGrow: 1,
    maxWidth: Math.floor((width - (numColumns - 1) * columnGap) / numColumns),
  };

  return [gridLayoutHandler, gridStyle, gridItemStyle];
}
