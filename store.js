import { createStore, combineReducers } from 'redux';
import placeReducer from './reducers/placeReducer';
import collectionReducer from './reducers/collectionReducer';

const rootReducer = combineReducers({
  places: placeReducer,
  collections: collectionReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
