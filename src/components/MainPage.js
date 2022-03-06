import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticlesList from './ArticlesList';
import { fetchArticles } from '../redux/actions/newsActions';
import SortOptions from './SortOptions';
import Message from './Message';
import Loading from './Loading';

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
