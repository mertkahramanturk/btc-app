import React from 'react';
import {  Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

const WrappedRoutes = React.lazy(() => import("./WrappedRoutes"));

const Router = () => (
  <Switch>
   
    <PrivateRoute path="/" component={WrappedRoutes} />
  </Switch>
);

export default Router;