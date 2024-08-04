import { combineReducers } from 'redux';

import pizzasReducer from './pizzas.js';
import filtersReducer from './filters.js';

const rootReducer = combineReducers({
  pizzas: pizzasReducer,

  filters: filtersReducer,
});

export default rootReducer;
