import { createStore, combineReducers } from 'redux';
import postReducer from './reducers/postReducer';
import collectionReducer from './reducers/collectionReducer';
import collectionPostReducer from './reducers/collectionPostReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  collections: collectionReducer,
  collectionPost: collectionPostReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
