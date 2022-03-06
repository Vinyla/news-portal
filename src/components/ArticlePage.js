import React from 'react';
import { useSelector } from 'react-redux';

const ArticlePage = () => {
  const article = useSelector((state) => state.news.article);
  const {
    source,
    author,
    content,
    title,
    description,
    urlToImage,
    publishedAt,
  } = article;

  const formatDate = new Date(publishedAt).toISOString().slice(0, 10);

  return (
    <div className="container">
      <div className="article">
        <img src={urlToImage} alt="article-img" />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{content}</p>
        <p>
          {author}&nbsp;
          {source.name}
        </p>
        <p>{formatDate}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
