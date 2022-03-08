import React, { useEffect } from 'react';
import { fetchDataFromApi } from '../../api/newsApi.js';
import { fetchListOfArticles } from '../../redux/actions/newsActions.js';
import { useDispatch, useSelector } from 'react-redux';

const LoadMore = (props) => {
  const articles = useSelector((state) => state.news.articles);
  const dispatch = useDispatch();

  const nextPage = () => {
    props.setPage(props.page + 1);
    props.setTotalResults(props.totalResults - 20);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    props.setPage(props.page - 1);
    props.setTotalResults(props.totalResults + 20);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchDataFromApi(props.page).then((data) => {
      dispatch(fetchListOfArticles(data.articles));
    }); //eslint-disable-next-line
  }, [props.page]);

  return (
    <div className="load-more">
      {props.page > 1 && articles.length > 0 && (
        <button onClick={previousPage}>Previous</button>
      )}
      {props.page >= 1 &&
        props.totalResults >= 20 &&
        articles.length > 0 && (
          <button onClick={nextPage}>Next</button>
        )}
    </div>
  );
};

export default LoadMore;
