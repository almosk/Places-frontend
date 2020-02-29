// import { ADD_PLACE, DELETE_PLACE } from '../actions/types';

const initialState = {
  byId: {
    0: {id: 0, title: 'Restoraunts'},
    1: {id: 1, title: 'Parks'}
  },
  allIds : [0, 1]
};

const collectionReducer = (state = initialState, action) => {
  switch(action.type) {

    default:
      return state;
  }
}

export default collectionReducer;
