const initialState = {
  articles: [],
  article: {},
  querry: '',
  sort: false,
  sortBy: '',
  loading: false,
};
export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES':
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case 'GET_ARTICLE':
      return {
        ...state,
        article: action.payload,
      };
    case 'QUERRY':
      return {
        ...state,
        querry: action.payload,
      };
    case 'SORT_OPTIONS':
      return {
        ...state,
        sort: true,
        sortBy: action.payload,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
