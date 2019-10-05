import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import GettingName from './Pages/GettingName';
import Chatting from './Pages/Chatting';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={GettingName} />
      <Route exact path='/menu-chat' component={Main} />
      <Route path='/chat/:id' component={Chatting} />
    </Switch>
  </BrowserRouter>
);

export default Routes;