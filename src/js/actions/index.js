import {ADD_ARTICLE} from '../constants/action-types'; 

const article =  { title: "React Redux for absolute beginners", id: 3 },

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});
