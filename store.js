import { createStore, combineReducers } from 'redux';
import postReducer from './reducers/postReducer';
import collectionReducer from './reducers/collectionReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  collections: collectionReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
