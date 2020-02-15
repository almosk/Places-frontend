import { ADD_POST, DELETE_POST } from '../actions/types';

const initialState = {
  placeName: '',
  posts: [
    {id: 0,
    name: 'ABC Roasters'},
    {id: 1,
    name: 'Salut Cafe'},
    {id: 2,
    name: 'Gorky Park'},
  ]
};

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      console.log(state)
      return {
        ...state,
        posts: state.posts.concat({
          id: state.posts.length,
          name: action.payload.placeName
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
