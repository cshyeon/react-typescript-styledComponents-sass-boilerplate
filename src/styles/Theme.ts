import { createContext } from 'react';

const color = {
  main: '#382933',
  sub: '#3b5249',  

  /* fonts */
  mainFont: '#ededed',

  /* Buttons */
  buttonBG: '#efefef',

  /* Cards */
  cardBg: '#ffffff'
};

const theme = {
  rootFontSize: '16px',
  rootFont: "'Do Hyeon', sans-serif",
  rootFontWeight: "bold",
  color
};

const themeType = typeof theme;

/* To change theme dynamically */
// interface TC{
//   setTheme: any | undefined
// };
// const ThemeContext = createContext<TC>({setTheme: undefined});

export { themeType };
export default theme;