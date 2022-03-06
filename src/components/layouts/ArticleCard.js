import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { readFullArticle } from '../../redux/actions/newsActions';
import noImg from '../../assets/images/no-image.png';

const ArticleCard = (props) => {
  const { urlToImage, title, description } = props.article;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onReadMoreClick = () => {
    dispatch(readFullArticle(props.article));
    navigate('/' + props.article.title);
  };

  return (
    <div className="card">
      <div className="card-header">
        {urlToImage === undefined ? (
          <img src={noImg} alt="article-img" />
        ) : (
          <img src={urlToImage} alt="article-img" />
        )}
      </div>

      <div className="card-info">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : <p>No Description.</p>}
      </div>

      <div className="card-footer">
        <button onClick={onReadMoreClick}>Read Full Article</button>
      </div>
    </div>
  );
};

export default ArticleCard;