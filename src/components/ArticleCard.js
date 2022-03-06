import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getArticleById } from '../redux/actions/newsActions';
import noImg from '../assets/images/no-image.png';

const ArticleCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { urlToImage, title, description } = props.article;

  const readFullArticle = () => {
    // console.log(props.id);
    // dispatch(getArticleById(props.id));
    navigate('/' + props.id);
  };

  return (
    <div className="card">
      <div className="card-header">
        {urlToImage ? (
          <img src={urlToImage} alt="article-img" />
        ) : (
          <img src={noImg} alt="article-img" />
        )}
      </div>

      <div className="card-info">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : <p>No Description.</p>}
      </div>

      <div className="card-footer">
        <button onClick={readFullArticle}>Read Full Article</button>
      </div>
    </div>
  );
};

export default ArticleCard;
