import 'styled-components';
import breakpoints from './breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: Record<'primary', 'Poppins'>;
    fontWeight: {
      primary: {
        regular: number;
        medium: number;
        semiBold: number;
      };
    };
    colors: Record<string, string>;
    breakpoints: typeof breakpoints;
  }
}
