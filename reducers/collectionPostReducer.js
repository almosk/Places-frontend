// import { ADD_PLACE, DELETE_PLACE } from '../actions/types';

const initialState = {
  collectionPosts: {
    byId: {
      0: {id: 0, collectionId: 0, postId: 1},
      1: {id: 1, collectionId: 1, postId: 2}
    },
    allIds : [0, 1]
  }
};

const collectionPostReducer = (state = initialState, action) => {
  switch(action.type) {

    default:
      return state;
  }
}

export default collectionPostReducer;
