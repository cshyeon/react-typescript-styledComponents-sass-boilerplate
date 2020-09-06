import { createGlobalStyle, ThemedStyledInterface } from 'styled-components';
import styledReset from './StyledReset';
import theme from 'styles/Theme';


const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  ${styledReset}

  body {
    background-color: ${props => props.theme.color.main};

    font-size: ${props => props.theme.rootFontSize};
    font-family: ${props => props.theme.rootFont};
    font-weight: ${props => props.theme.rootFontWeight};
    color: ${props => props.theme.color.mainFont};
  }
`;

export default GlobalStyle;
