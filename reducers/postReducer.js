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
};

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      console.log(state)
      return {
        ...state,
        posts: state.posts.concat({
          id: state.posts.length,
          title: action.payload.title
        })
      }
    case DELETE_POST:
      console.log(action.id);
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.payload.id)
      };
    default:
      return state;
  }
}

export default postReducer;
