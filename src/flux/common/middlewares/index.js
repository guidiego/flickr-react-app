import { applyMiddleware } from 'redux';

import apiMiddleware from './api';

export default applyMiddleware(apiMiddleware);