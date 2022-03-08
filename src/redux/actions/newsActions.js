export const fetchListOfArticles = (articles) => {
  return {
    type: 'GET_ARTICLES',
    payload: articles,
  };
};

export const getSingleArticle = (article) => {
  return {
    type: 'GET_ARTICLE',
    payload: article,
  };
};

export const setQuerry = (querry) => {
  return {
    type: 'QUERRY',
    payload: querry,
  };
};

export const sortArticles = (sortBy) => {
  return {
    type: 'SORT_OPTIONS',
    payload: sortBy,
  };
};

export const loadingSpinner = () => {
  return {
    type: 'LOADING',
  };
};
