import {
  FETCH_ARTICLES,
  SET_QUERRY,
  SORT_OPTIONS_VISIBLE,
  SORT_BY,
  GET_ARTICLE,
  LOADING,
} from './types';
import axios from 'axios';

const apiKey = process.env.REACT_APP_NEWS_API;
const baseURL = 'https://newsapi.org/v2/';

// fetch data from api
export const fetchArticles = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`${baseURL}top-headlines?country=us&apiKey=${apiKey}`)
    .then((response) => {
      dispatch({
        type: FETCH_ARTICLES,
        payload: response.data.articles,
      });
    })
    .catch((error) => console.log(error));
};

// search data from api
export const searchArticles = (term, sortBy) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(
      `${baseURL}everything?q=${term}&sortBy=${sortBy}&apiKey=${apiKey}`
    )
    .then((response) => {
      dispatch({
        type: FETCH_ARTICLES,
        payload: response.data.articles,
      });
    })
    .catch((error) => console.log(error));
  dispatch({ type: SORT_OPTIONS_VISIBLE });
  dispatch({ type: SET_QUERRY, payload: term });
};

// sorting by options value
export const setSortingValue = (term, value) => (dispatch) => {
  dispatch(searchArticles(term, value));
  dispatch({ type: SORT_BY, payload: value });
};

// get full info about the article
export const readFullArticle = (article) => (dispatch) => {
  dispatch({ type: GET_ARTICLE, payload: article });
};
