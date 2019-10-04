import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import CreateChat from './Pages/CreateChat';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/create-chat' component={CreateChat} />
    </Switch>
  </BrowserRouter>
);

export default Routes;