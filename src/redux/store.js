// flow
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate, persistStore } from 'redux-persist';

import reducers from './reducers';
import sagas from './sagas';
import apiAuthMiddleware from './middlewares/api-auth-middleware';

const sagaMiddleware = createSagaMiddleware();

const store: Store = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(apiAuthMiddleware),
  autoRehydrate(),
)(createStore)(reducers);

persistStore(store, { storage: AsyncStorage, whitelist: ['session'] });

sagaMiddleware.run(sagas);

export default store;
