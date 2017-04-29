import { Map } from 'immutable';
import { createStore } from 'redux';

import middlewares from 'common/middlewares';
import rootReducer from './rootReducer';

export default createStore(rootReducer, new Map(), middlewares);