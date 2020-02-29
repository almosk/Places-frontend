import { ADD_COLLECTION_POST } from '../actions/types';

const initialState = {
  byId: {
    0: {id: 0, collectionId: 0, postId: 1},
    1: {id: 1, collectionId: 1, postId: 2}
  },
  allIds : [0, 1]
};

const collectionPostReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COLLECTION_POST:
      const collectionPostId = Math.max.apply(null, Object.keys(state.collectionPosts.byId)) + 1
      const newCollectionPost = {id: collectionPostId, collectionId: action.payload.collectionId, postId: action.payload.postId }
      return {
        ...state,
        collectionPosts: {
          ...state.collectionPosts,
          byId: {
            ...state.collectionPosts.byId,
            [collectionPostId]: newCollectionPost
          }
        }
      }
    default:
      return state;
  }
}

export default collectionPostReducer;
