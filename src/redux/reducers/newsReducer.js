import {
  SEARCH_ARTICLES,
  FETCH_ARTICLES,
  SORT_OPTIONS,
  LOADING,
  SORT_BY,
} from './types';

const initialState = {
  loading: false,
  articles: [],
  article: {},
  sorting: false,
  sortBy: 'publishedAt',
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
    case SORT_OPTIONS:
      return {
        ...state,
        sorting: true,
        sortBy: action.payload,
      };
    case SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};
