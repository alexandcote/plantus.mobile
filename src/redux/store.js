// flow
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
)(createStore)(reducers);

sagaMiddleware.run(sagas);

export default store;
