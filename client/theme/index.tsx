import { color } from '@rneui/base';
import { createTheme } from '@rneui/themed';
import colors from './colors';
import typographies from './typographies';

export const defaultFontFamily = 'pretendard'; // should be pretendard

const theme = createTheme({
  components: {
    Button: {
      titleStyle: {
        fontFamily: defaultFontFamily,
      },
      buttonStyle: {
        borderRadius: 8,
      },
    },
    Text: (props) => {
      const typoName = Object.keys(typographies).find(
        (typoName) => typoName in props
      );

      return {
        style: [
          { fontFamily: defaultFontFamily },
          typoName ? typographies[typoName] : {},
        ],
      };
    },
  },
  lightColors: {
    primary: colors.AI_BLUE,
    secondary: colors.TECH_AQUA,
    background: colors.GREY900,
    white: colors.GREY900,
    black: colors.GREY000,
    grey0: colors.GREY800,
    grey1: colors.GREY700,
    grey2: colors.GREY500,
    grey3: colors.GREY450,
    grey4: colors.GREY400,
    grey5: colors.GREY300,
    // greyOutline;
    searchBg: colors.GREY900,
    success: colors.SUCCESS,
    error: colors.DANGEROUS,
    warning: colors.WARNING,
    divider: colors.GREY700,
    disabled: colors.GREY600,
  },
  mode: 'light',
});

export default theme;
