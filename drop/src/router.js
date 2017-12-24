import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import BasicLayout from './layouts/BasicLayout';
import Container from './layouts/Container';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/periodical',
      component: () => import('./layouts/Periodical'),
    },
  ];
  return (
    <ConnectedRouter history={history}>
      <BasicLayout>
        <Switch>
          <Route exact path="/" render={() => <Container />} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route
                key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
      </BasicLayout>
    </ConnectedRouter>
  );
}

export default RouterConfig;
