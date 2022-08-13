import React from 'react';
import Layout from '../../components/Layout';
import { PrivateRoute } from '../PrivateRoute';

import BtcPrice from '../../pages/BtcPrice/index'


export default () => (
  <div>
    <Layout>
      <PrivateRoute path="/" component={BtcPrice} />
    </Layout>
  </div>
);
