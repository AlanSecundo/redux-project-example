import { combineReducers } from 'redux';
import { superMarketReducer } from './superMarketReducer'

export const Reducers = combineReducers({
  superMarketReducer: superMarketReducer
})