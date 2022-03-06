import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticlesList from './ArticlesList';
import { fetchArticles } from '../redux/actions/newsActions';
import SortOptions from './SortOptions';
import Message from './Message';
import Loading from './Loading';

const MainPage = () => {
  const articles = useSelector((state) => state.news.articles);
  const sorting = useSelector((state) => state.news.sorting);
  const loading = useSelector((state) => state.news.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchArticles());
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="main">
      {articles.length === 0 && <Message />}
      {sorting && articles.length > 1 && <SortOptions />}
      <ArticlesList />
    </div>
  );
};

export default MainPage;
