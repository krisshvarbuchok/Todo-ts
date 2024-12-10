import { legacy_createStore as createStore, combineReducers } from 'redux';
import listReducer from './reducers/listReducer';
import addTaskReducer from './reducers/addTaskReducer';
import doneReducer from './reducers/doneReducer';
import editIdReducer from './reducers/editIdReducer';
import editTaskReducer from './reducers/editTaskReducer';


const rootReducer = combineReducers({
  list: listReducer,
  task: addTaskReducer,
  done: doneReducer,
  editId: editIdReducer,
  taskEdit: editTaskReducer,
});

const store = createStore(rootReducer);

export default store;
export type RootReducerType = ReturnType<typeof rootReducer> 
export type RootState = ReturnType<typeof store.getState>