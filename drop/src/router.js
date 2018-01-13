/**
 * 2018-01-13
 */
import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import BasicLayout from './layouts/BasicLayout';
import Container from './routes/Container';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/periodical',
      component: () => import('./routes/Periodical.js'),
    },
    {
      path: '/single',
      component: () => import('./routes/Single.js'),
    },
    {
      path: '/column',
      component: () => import('./routes/Column.js'),
    },
    {
      path: '/activity',
      component: () => import('./routes/Activity.js'),
    },
    {
      path: '/app',
      component: () => import('./routes/App.js'),
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
