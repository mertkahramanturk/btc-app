
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable arrow-parens */
/* eslint-disable max-len */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-const */
/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

import React from 'react';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, extraProps, ...rest }) => (
  <Route {...rest} render={props => {
  

    if (extraProps) {
      props = Object.assign({}, props, extraProps);
    }

    return <Component {...props} />;
  }} />
);
