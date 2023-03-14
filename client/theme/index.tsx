import { createTheme } from '@rneui/themed';

const defaultFontFamily = 'space-mono'; // should be pretendard

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
    Text: {
      style: {
        fontFamily: defaultFontFamily,
      },
    },
  },
  lightColors: {
    primary: '#245DE5',
    // secondary;
    // background;
    // white;
    // black;
    // grey0;
    // grey1;
    // grey2;
    // grey3;
    // grey4;
    // grey5;
    // greyOutline;
    // searchBg;
    // success;
    // error;
    // warning;
    // divider;
  },
  mode: 'light',
});

export default theme;
