import React from 'react';
import { Router, Route } from 'dva/router';

import IndexPage from './routes/IndexPage';
import Tasks from "./routes/Tasks.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/tasks" component={Tasks} />
    </Router>
  );
}

export default RouterConfig;
