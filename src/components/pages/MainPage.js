import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../redux/actions/newsActions';
import ArticlesList from '../layouts/ArticlesList';
import SortOptions from '../layouts/SortOptions';
import Message from '../layouts/Message';
import Loading from '../layouts/Loading';

const MainPage = () => {
  const articles = useSelector((state) => state.news.articles);
  const sortingOptions = useSelector((state) => state.news.sorting);
  const spinner = useSelector((state) => state.news.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  if (spinner) {
    return <Loading />;
  }
  return (
    <div className="main">
      {articles.length === 0 && <Message />}
      {sortingOptions && <SortOptions />}
      <ArticlesList />
    </div>
  );
};

export default MainPage;
