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
        <h2>{title ? title : 'No Title'}</h2>
        <p>{description ? description : 'No description'}</p>
        <p>{content ? content : 'No content'}</p>
        <p>
          {author ? author : null}&nbsp;
          {source.name ? source.name : null}
        </p>
        <p>{publishedAt ? formatDate : null}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
