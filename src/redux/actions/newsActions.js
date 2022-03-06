import {
  FETCH_ARTICLES,
  SEARCH_ARTICLES,
  SORT_OPTIONS,
  SORT_BY,
  GET_ARTICLE,
  LOADING,
  LOAD_MORE,
} from './types';
import api from '../../api/newsApi';

const apiKey = process.env.REACT_APP_NEWS_API;

// fetch data from api
export const fetchArticles = () => async (dispatch) => {
  //loading spinner
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
  //on user search set sorting options visible
  dispatch({ type: SORT_OPTIONS });
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
};

export const setSrotingValue = (value) => (dispatch) => {
  dispatch(searchArticles());
  return {
    type: SORT_BY,
    payload: value,
  };
};

export const loadMoreArticles = () => {};

// export const getArticleById = (id) => {
//   return {
//     type: GET_ARTICLE,
//     payload: id,
//   };
// };
