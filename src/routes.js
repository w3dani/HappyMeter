import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  SuperLogin, SuperSignUp,
} from './components/pages';


const Routes = (
  <div>
    <Switch>
      <Route path="/" exact component={() => <SuperLogin />} />
      <Route path="/signup" exact component={() => <SuperSignUp />} />
    </Switch>
  </div>
);

export default Routes;
