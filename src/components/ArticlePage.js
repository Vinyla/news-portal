import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = useSelector((state) =>
    state.news.articles.find((article) => article.id === articleId)
  );

  console.log(article);
  return <>article </>;
};

export default ArticlePage;
