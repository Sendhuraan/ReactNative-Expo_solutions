import { createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import rootReducer from '../reducers';
import { fetchTodosEpic } from '../epics';

const rootEpic = combineEpics(fetchTodosEpic);
const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

export default store;
