import { css, CSSProp } from 'styled-components';

const color = {
  main: '#382933',
  sub: '#3b5249',

  /* fonts */
  mainFont: '#ededed',

  /* Buttons */
  buttonBG: '#efefef',

  /* Cards */
  cardBg: '#ffffff',
};

/* Media queries */
const MEDIA_SIZES_WIDTH: { [key: string]: number } = {
  desktop: 1024,
  tablet: 768,
  mobile: 480,
};

type BackQuoteArgs = string[];
interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = Object.keys(MEDIA_SIZES_WIDTH).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${MEDIA_SIZES_WIDTH.desktop}px) {
          ${args}
        }
      `;
      break;
    case 'tablet':
      acc.tablet = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${MEDIA_SIZES_WIDTH.tablet}px) {
          ${args}
        }
      `;
      break;
    case 'mobile':
      acc.mobile = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${MEDIA_SIZES_WIDTH.mobile}px) {
          ${args}
        }
      `;
      break;
    default:
      break;
  }
  return acc;
}, {} as Media);

const theme = {
  rootFontSize: '16px',
  rootFont: "'Do Hyeon', sans-serif",
  rootFontWeight: 'bold',
  color,
  media,
};

const themeType = typeof theme;

/* To change theme dynamically */
// interface TC{
//   setTheme: any | undefined
// };
// const ThemeContext = createContext<TC>({setTheme: undefined});

export { themeType };
export default theme;
