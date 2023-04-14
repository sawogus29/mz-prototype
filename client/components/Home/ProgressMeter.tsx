import { PropsWithChildren, useState } from 'react';
import { View, StyleSheet, ViewProps, ViewStyle } from 'react-native';
import { Text } from '@rneui/themed';
import colors from '../../theme/colors';
import ProgressTooltip from './ProgressTooltip';
import useWidthOnLayout from '../../hooks/useWidthOnLayout';

interface ProgressMeterProps {
  value: number;
  maxValue: number;
  unit?: string;
}

interface TooltipProps extends ViewProps {
  leftSpace: number;
  rightSpace: number;
  stickOut?: number;
  highlight?: boolean;
}

export default function ProgressMeter({
  value,
  maxValue,
  unit,
}: ProgressMeterProps) {
  const percentage = Math.min(value / maxValue, 1) * 100;
  const [leftSpace, leftSpaceLayoutHandler] = useWidthOnLayout();
  const [rightSpace, rightSpaceLayoutHandler] = useWidthOnLayout();

  const highlight = percentage >= 100;

  const contentStyle = {
    width: `${percentage}%`,
    backgroundColor: highlight ? colors.AI_BLUE : colors.GREY400,
  };

  return (
    <View style={styles.container}>
      <ProgressTooltip
        leftSpace={leftSpace}
        rightSpace={rightSpace}
        stickOut={8}
        highlight={highlight}
      >
        <Text caption2 style={styles.tooltipText}>
          {value}
          {unit}
        </Text>
      </ProgressTooltip>
      <View style={styles.track}>
        <View
          style={[styles.content, contentStyle]}
          onLayout={leftSpaceLayoutHandler}
        />
        <View style={styles.dummyContent} onLayout={rightSpaceLayoutHandler} />
      </View>
      <Text caption2 style={styles.maxValueText}>
        {maxValue}
        {unit}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    rowGap: 4,
  },
  track: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.GREY700,
    borderRadius: 4,
    overflow: 'hidden',
  },
  content: {
    height: 20,
    flexDirection: 'row-reverse',
  },
  dummyContent: {
    // backgroundColor: 'green',
    flex: 1,
  },
  tooltipText: {
    color: colors.GREY800,
  },
  maxValueText: {
    alignSelf: 'flex-end',
  },
});
