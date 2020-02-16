import { combineReducers } from 'redux';
import { ADD_POST, DELETE_POST } from '../actions/types';

const initialState = {
  posts: {
    byId: {
      0: {id: 0, title: 'ABC Roasters'},
      1: {id: 1, title: 'Salut Cafe'},
      2: {id: 2, title: 'Gorky Park'},
    },
    allIds : [0, 1, 2]
  }
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      const postId = Math.max.apply(null, Object.keys(state.posts.byId)) + 1
      const newPost = {id: postId, title: action.payload.title }
      return {
        ...state,
        posts: {
          ...state.posts,
          byId: {
            ...state.posts.byId,
            [postId]: newPost
          }
        }
      }
    case DELETE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          byId: Object.keys(state.posts.byId).reduce((result, key) => {
            if (key !== action.payload.id) {
              result[key] = state.posts.byId[key];
            }
              return result;
          }, {})
        }
      }
      // return {
      //   ...state,
      //   posts: state.posts.filter(post => post.id != action.payload.id)
      // };
    default:
      return state;
  }
}

export default postReducer;
