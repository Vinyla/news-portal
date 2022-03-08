import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSingleArticle } from '../../redux/actions/newsActions';
import noImg from '../../assets/images/no-image.png';

const ArticleCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { urlToImage, title, description } = props.article;

  const onReadMoreHandler = () => {
    dispatch(getSingleArticle(props.article));
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
        <button onClick={onReadMoreHandler}>Read Full Article</button>
      </div>
    </div>
  );
};

export default ArticleCard;
