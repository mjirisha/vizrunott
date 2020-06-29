import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import Page from './Page';
import routeHelper from '../../router/helper';

const Layout = ({ component: Component, ...rest }) => {
  const innerLayout = useRouteMatch({
    path: routeHelper.profileDetails.href(':profileId'),
    strict: true,
    sensitive: false,
  });

  return (
    <Route {...rest}>
      {/* TODO: add HELMET here */}
      <Page innerLayout={!!innerLayout}>
        <Component />
      </Page>
    </Route>
  );
};

export default Layout;
