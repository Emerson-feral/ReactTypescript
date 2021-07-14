import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer
});

export type Store = StateType<typeof rootReducer>;

export default rootReducer;
