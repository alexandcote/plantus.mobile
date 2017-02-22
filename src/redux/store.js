// flow
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate, persistStore } from 'redux-persist';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store: Store = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  //autoRehydrate(),
)(createStore)(reducers);

//persistStore(store, { storage: AsyncStorage, blacklist: ['initializing'] });

sagaMiddleware.run(sagas);

export default store;
