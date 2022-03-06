import {
  SEARCH_ARTICLES,
  FETCH_ARTICLES,
  SORT_NEWS,
  GET_ARTICLE,
  LOADING,
} from './types';

const initialState = {
  articles: [],
  sorting: false,
  article: {},
  loading: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
      };
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        sorting: false,
        loading: false,
      };
    case SEARCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case SORT_NEWS:
      return {
        ...state,
        sorting: true,
      };
    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };
    default:
      return state;
  }
};
