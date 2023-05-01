import { applyMiddleware, legacy_createStore } from 'redux';
import rootReducer from './reducers/reducer';
import thunk from 'redux-thunk';

const configureStore = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
