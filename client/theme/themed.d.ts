import '@rneui/themed';

declare module '@rneui/themed' {
  export interface TextProps {
    bigTitle?: boolean;
    title1?: boolean;
    title2?: boolean;
    title3?: boolean;
    headline1?: boolean;
    headline2?: boolean;
    headline3?: boolean;
    subheader1?: boolean;
    subheader2?: boolean;
    subheader3?: boolean;
    subheader4?: boolean;
    body1?: boolean;
    body2?: boolean;
    body3?: boolean;
    body4?: boolean;
    footnote?: boolean;
    caption1?: boolean;
    caption2?: boolean;
  }

  export interface ComponentTheme {
    Text: TextProps;
  }
}
