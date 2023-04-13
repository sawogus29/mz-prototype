import { useState } from 'react';
import { LayoutChangeEvent, ViewStyle } from 'react-native';

function __useGrid(
  getBasisAndNumColumns: (width: number) => {
    basis: number;
    numColumns: number;
  },
  columnGap: number,
  rowGap: number | undefined
): [(e: LayoutChangeEvent) => void, ViewStyle, ViewStyle] {
  const [containerWidth, setContainerWidth] = useState(360);

  //================ for grid =====================
  const containerLayoutHandler = (e: LayoutChangeEvent) =>
    e.nativeEvent.layout.width !== containerWidth && // optimization: update state only when there's change in width
    setContainerWidth(e.nativeEvent.layout.width);

  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap,
    rowGap,
  };
  //===============================================

  //================ for item =====================
  // To prevent screen crackles on window resize,
  // I used flexBasis & maxWidth (instead of width)
  const { basis, numColumns } = getBasisAndNumColumns(containerWidth);

  const itemStyle: ViewStyle = {
    flexBasis: basis,
    flexGrow: 1,
    maxWidth: Math.floor(
      (containerWidth - (numColumns - 1) * columnGap) / numColumns
    ),
  };
  //===============================================

  return [containerLayoutHandler, containerStyle, itemStyle];
}

/**
 * Items are stretched automatically to fill the container width.
 * If There's room for another item in current row (based on basis),
 * then 1 item from next row is added to current row.
 *
 * @param basis minimum width of an item. This value is used as flexBasis value of an item.
 * @param columnGap gap between columns
 * @param rowGap gap between rows
 * @returns [gridLayoutHandler, gridStyle, itemStyle]
 *  - gridLayoutHandler: this should be passed to 'onLayout' prop of grid(container)
 *  - gridStyle: this should be passed to 'style' prop of grid(container)
 *  - itemStyle: this should be passed to 'style' prop of grid item(children)
 */
export const useBasisGrid = (basis: number, columnGap = 0, rowGap = 0) =>
  __useGrid(
    (containerWidth) => ({
      basis,
      numColumns:
        1 + Math.floor((containerWidth - basis) / (basis + columnGap)), // calc numColumns based on basis
    }),
    columnGap,
    rowGap
  );

/**
 * Number of columns are fixed.
 * Items are stretch to fill the width of grid cell.
 *
 * @param numColumns Number of columns you want
 * @param columnGap gap between columns
 * @param rowGap gap between rows
 * @returns [gridLayoutHandler, gridStyle, itemStyle]
 *  - gridLayoutHandler: this should be passed to 'onLayout' prop of grid(container)
 *  - gridStyle: this should be passed to 'style' prop of grid(container)
 *  - itemStyle: this should be passed to 'style' prop of grid item(children)
 */
export const useFixedNumColumnsGrid = (
  numColumns: number,
  columnGap = 0,
  rowGap = 0
) =>
  __useGrid(
    (containerWidth) => ({
      basis:
        Math.floor(containerWidth - (numColumns - 1) * columnGap) /
        (numColumns + 0.5), // calc basis based on numColumns
      numColumns,
    }),
    columnGap,
    rowGap
  );
