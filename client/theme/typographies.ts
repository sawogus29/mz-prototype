import { TextStyle } from 'react-native';

type TypoStyle = Pick<
  TextStyle,
  'fontSize' | 'fontWeight' | 'lineHeight' | 'letterSpacing'
>;

const typographies: Record<string, TypoStyle> = {
  bigTitle: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 42,
    letterSpacing: -0.75,
  },
  title1: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 33,
    letterSpacing: -0.36,
  },
  title2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 33,
    letterSpacing: -0.36,
  },
  title3: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 33,
    letterSpacing: -0.36,
  },
  headline1: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: -0.22,
  },
  headline2: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    letterSpacing: -0.22,
  },
  headline3: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 27,
    letterSpacing: -0.22,
  },
  subheader1: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.12,
  },
  subheader2: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.12,
  },
  subheader3: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: -0.11,
  },
  subheader4: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.11,
  },
  body1: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.88,
  },
  body2: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.88,
  },
  body3: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.07,
  },
  body4: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.07,
  },
  footnote: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    letterSpacing: -0.04,
  },
  caption1: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 17,
    letterSpacing: -0.04,
  },
  caption2: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 14,
    letterSpacing: -0.03,
  },
};

export default typographies;
