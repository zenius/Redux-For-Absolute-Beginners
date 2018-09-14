import { ADD_ARTICLE } from "../constants/action-types";
import { addArticle } from "../actions/index";

const initialState = { articles: [] };

const rootReducer = (state = initialState, action = addArticle) => {
  switch (action.type) {
    case ADD_ARTICLE:
      // state.articles.push(action.payload);  // makes the state mutable , do not use it
      // return { ...state, articles: state.articles.concat(action.payload) };  // good , but ...
      return { ...state, articles: [...state.articles, action.payload] };

    default:
      return state;
  }
};
export default rootReducer;
