import { createStore, combineReducers } from 'redux';
import postReducer from './reducers/postReducer';
import collectionReducer from './reducers/collectionReducer';
import collectionPostReducer from './reducers/collectionPostReducer';
import userReducer from './reducers/userReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  collections: collectionReducer,
  collectionPost: collectionPostReducer,
  users: userReducer,
  login: loginReducer,
});

// const configureStore = () => {
//   return createStore(rootReducer);
// }

export default rootReducer;
