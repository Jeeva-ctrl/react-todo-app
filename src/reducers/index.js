import { combineReducers ,createStore} from 'redux'
import todos from '../todo_master/reducer/Todo';


const rootReducer =  combineReducers({
    todos
})

const store = createStore(
    rootReducer
  );
  export default store;