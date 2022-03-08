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
        <img
          src={urlToImage ? urlToImage : noImg}
          alt="article-img"
        />
      </div>
      <div className="card-info">
        <h3>{title ? title : 'No title'}</h3>
        <p>{description ? description : 'No description'}</p>
      </div>

      <div className="card-footer">
        <button onClick={onReadMoreHandler}>Read Full Article</button>
      </div>
    </div>
  );
};

export default ArticleCard;
