import {
  FETCH_ARTICLES,
  SORT_OPTIONS_VISIBLE,
  LOADING,
  SORT_BY,
  SET_QUERRY,
  GET_ARTICLE,
  LOAD_MORE,
} from './types';

const initialState = {
  loading: false,
  articles: [],
  article: {},
  querry: '',
  sorting: false,
  sortBy: '',
  loadMore: false,
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
        loading: false,
      };
    case SET_QUERRY:
      return {
        ...state,
        querry: action.payload,
      };
    case SORT_OPTIONS_VISIBLE:
      return {
        ...state,
        sorting: true,
      };
    case SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };
    case LOAD_MORE:
      return {
        loadMore: true,
      };
    default:
      return state;
  }
};
