import dva from 'dva';
import createLogger from 'dva-logger';

import './index.html';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// logger
app.use(createLogger());

// 3. Model
app.model(require("./models/tasks"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
