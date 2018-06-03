import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import { moviesSaga } from './movies.saga';

const middlewares = [];
let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = composeWithDevTools;
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
const enhancers = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(reducers, enhancers);
sagaMiddleware.run(moviesSaga);
export default store;
