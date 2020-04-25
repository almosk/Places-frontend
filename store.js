import { createStore, combineReducers } from 'redux';
import postReducer from './reducers/postReducer';
import profilePostReducer from './reducers/profilePostReducer';
import collectionReducer from './reducers/collectionReducer';
import profileCollectionReducer from './reducers/profileCollectionReducer';
import collectionPostReducer from './reducers/collectionPostReducer';
import userReducer from './reducers/userReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  profilePosts: profilePostReducer,
  collections: collectionReducer,
  profileCollections: profileCollectionReducer,
  collectionPost: collectionPostReducer,
  users: userReducer,
  login: loginReducer,
});

// const configureStore = () => {
//   return createStore(rootReducer);
// }

export default rootReducer;
