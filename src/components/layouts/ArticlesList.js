import React from 'react';
import { useSelector } from 'react-redux';

import ArticleCard from './ArticleCard';

const ArticlesList = () => {
  const articles = useSelector((state) => state.news.articles);

  return (
    <div className="cards">
      {articles.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
