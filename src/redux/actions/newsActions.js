import {
  FETCH_ARTICLES,
  SEARCH_ARTICLES,
  SET_QUERRY,
  SORT_OPTIONS_VISIBLE,
  SORT_BY,
  GET_ARTICLE,
  LOADING,
  LOAD_MORE,
} from './types';
import api from '../../api/newsApi';

const apiKey = process.env.REACT_APP_NEWS_API;

// fetch data from api
export const fetchArticles = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const response = await api.get(
      `top-headlines?country=us&apiKey=${apiKey}`
    );
    dispatch({
      type: FETCH_ARTICLES,
      payload: response.data.articles,
    });
  } catch (error) {
    console.log(error);
  }
};

// search data from api
export const searchArticles = (term, sortBy) => async (dispatch) => {
  dispatch({ type: LOADING });
  // set visible sorting options after the user searches for the term
  dispatch({ type: SORT_OPTIONS_VISIBLE });
  try {
    const response = await api.get(
      `everything?q=${term}&sortBy=${sortBy}&apiKey=${apiKey}`
    );
    dispatch({
      type: SEARCH_ARTICLES,
      payload: response.data.articles,
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: SET_QUERRY, payload: term });
};

// sorting by options value
export const setSortingValue = (term, value) => (dispatch) => {
  dispatch(searchArticles(term, value));
  dispatch({ type: SORT_BY, payload: value });
};

export const loadMoreArticles = () => {};

// get full info about the article
export const readFullArticle = (article) => (dispatch) => {
  dispatch({ type: GET_ARTICLE, payload: article });
};
