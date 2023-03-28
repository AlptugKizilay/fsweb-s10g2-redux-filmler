import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorite: false,
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorite: !state.displayFavorite,
      } 
    case ADD_FAVORITE:
        if(state.favorites.includes(action.payload)==false){
            return {
              ...state,
              favorites: [...state.favorites, action.payload],
            };

        }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(item => (action.payload !== item.id)),
      };
    default:
      return state;
  }
};
export default favReducer;
