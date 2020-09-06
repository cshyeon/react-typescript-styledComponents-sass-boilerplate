import * as React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {About, Home} from '../pages';

const MainRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default MainRouter;