import { configureStore, combineReducers } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore(rootReducer, composeWithDevTools());

export default store;
