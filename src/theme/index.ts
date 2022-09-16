import { DefaultTheme } from 'styled-components';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  fontFamily: {
    primary: 'Poppins',
  },
  fontWeight: {
    primary: {
      regular: 400,
      medium: 500,
      semiBold: 600,
    },
  },
  colors: {
    primary: '#181A27',
    primarySubtle: '#535468',
    secondary: '#D95D37',
    light: '#FFF',
    black: '#01040F',
    green: '#000',
    red: '#000',
  },
  breakpoints,
};

export default theme;
