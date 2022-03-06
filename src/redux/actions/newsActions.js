import {
  FETCH_ARTICLES,
  SEARCH_ARTICLES,
  SORT_NEWS,
  GET_ARTICLE,
  LOADING,
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
export const searchArticles = (term) => async (dispatch) => {
  dispatch({ type: LOADING });
  dispatch({ type: SORT_NEWS });
  try {
    const response = await api.get(
      `everything?q=${term}&apiKey=${apiKey}`
    );
    dispatch({
      type: SEARCH_ARTICLES,
      payload: response.data.articles,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getArticleById = (id) => {
  return {
    type: GET_ARTICLE,
    payload: id,
  };
};
