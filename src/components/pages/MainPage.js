import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchListOfArticles,
  loadingSpinner,
  setQuerry,
} from '../../redux/actions/newsActions';
import { fetchDataFromApi } from '../../api/newsApi.js';
import ArticlesList from '../layouts/ArticlesList';
import SortOptions from '../layouts/SortOptions';
import LoadMore from '../layouts/LoadMore';
import Loading from '../layouts/Loading';

const MainPage = () => {
  const [totalResults, setTotalResults] = useState(20);
  const [page, setPage] = useState(1);

  const sortOptions = useSelector((state) => state.news.sort);
  const querry = useSelector((state) => state.news.querry);
  const loading = useSelector((state) => state.news.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingSpinner());
    fetchDataFromApi(page).then((data) => {
      dispatch(fetchListOfArticles(data.articles));
      dispatch(setQuerry(''));
    }); //eslint-disable-next-line
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main">
      {sortOptions && <SortOptions />}
      <ArticlesList />
      {querry.length === 0 && (
        <LoadMore
          page={page}
          setPage={setPage}
          totalResults={totalResults}
          setTotalResults={setTotalResults}
        />
      )}
    </div>
  );
};

export default MainPage;
