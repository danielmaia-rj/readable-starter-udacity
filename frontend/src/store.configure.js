import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './common/reducers.common';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;