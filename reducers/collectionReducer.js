// import { ADD_PLACE, DELETE_PLACE } from '../actions/types';

const initialState = {
  collections: [
    {id: 0,
    title: 'Restoraunts'}
  ]
};

const collectionReducer = (state = initialState, action) => {
  switch(action.type) {

    default:
      return state;
  }
}

export default collectionReducer;
