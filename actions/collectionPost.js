import { ADD_COLLECTION_POST } from './types';


export const addCollectionPost = (id, collection_id, post_id) => {
  return {
    type: ADD_COLLECTION_POST,
    payload: {
      id: id,
      collection_id: collection_id,
      post_id: post_id
    }
  }
}
