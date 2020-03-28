import { createStore, combineReducers } from 'redux';
import postReducer from './reducers/postReducer';
import collectionReducer from './reducers/collectionReducer';
import collectionPostReducer from './reducers/collectionPostReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  collections: collectionReducer,
  collectionPost: collectionPostReducer,
  users: userReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
