import { ADD_COLLECTION_POST } from './types';

export const addCollectionPost = (collectionId, postId) => {
  return {
    type: ADD_COLLECTION_POST,
    payload: {
      collectionId: collectionId,
      postId: postId
    }
  }
}
