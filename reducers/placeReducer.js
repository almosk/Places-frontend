import { ADD_PLACE, DELETE_PLACE } from '../actions/types';

const initialState = {
  placeName: '',
  places: [
    {id: 0,
    name: 'ABC Roasters'},
    {id: 1,
    name: 'Salut Cafe'},
    {id: 2,
    name: 'Gorky Park'},
  ]
};

const placeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      console.log(state)
      return {
        ...state,
        places: state.places.concat({
          id: state.places.length,
          name: action.payload.placeName
        })
      }
    case DELETE_PLACE:
      console.log(action.id);
      return {
        ...state,
        places: state.places.filter(place => place.id != action.payload.id)
      };
    default:
      return state;
  }
}

export default placeReducer;
