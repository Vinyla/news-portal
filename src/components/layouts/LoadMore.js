import React, { useEffect } from 'react';
import { fetchDataFromApi } from '../../api/newsApi.js';
import { fetchListOfArticles } from '../../redux/actions/newsActions.js';
import { useDispatch, useSelector } from 'react-redux';

const LoadMore = ({
  page,
  setPage,
  totalResults,
  setTotalResults,
}) => {
  const articles = useSelector((state) => state.news.articles);
  const dispatch = useDispatch();

  const nextPage = () => {
    setPage(page + 1);
    setTotalResults(totalResults - 20);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    setPage(page - 1);
    setTotalResults(totalResults + 20);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchDataFromApi(page).then((data) => {
      dispatch(fetchListOfArticles(data.articles));
    }); //eslint-disable-next-line
  }, [page]);

  return (
    <div className="load-more">
      {page > 1 && articles.length > 0 && (
        <button onClick={previousPage}>Previous</button>
      )}
      {page >= 1 && totalResults >= 20 && articles.length > 0 && (
        <button onClick={nextPage}>Next</button>
      )}
    </div>
  );
};

export default LoadMore;
