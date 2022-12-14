// @ts-ignore 
import { createGlobalStyle } from "styled-components";
// @ts-ignore 
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// @ts-ignore 
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
// @ts-ignore 
import { styleReset } from 'react95';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;