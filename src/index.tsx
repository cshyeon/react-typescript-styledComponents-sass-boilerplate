import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/StyledGlobal';
import theme from 'styles/Theme';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';

const Root: React.FC<{}> = () => {
  const [appTheme] = useState(theme);

  return (
    <React.StrictMode>
      <ThemeProvider theme={appTheme}>
        <Fragment>
          <GlobalStyle />
          <App />
        </Fragment>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
