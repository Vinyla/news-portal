import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  sortArticles,
  fetchListOfArticles,
  loadingSpinner,
} from '../../redux/actions/newsActions';
import { searchDataFromApi } from '../../api/newsApi.js';

const SortOptions = () => {
  const sortBy = useSelector((state) => state.news.sortBy);
  const querry = useSelector((state) => state.news.querry);
  const dispatch = useDispatch();

  const sortArticlesByOptions = (e) => {
    e.preventDefault();
    dispatch(loadingSpinner());
    dispatch(sortArticles(e.target.value));
    searchDataFromApi(querry, sortBy).then((data) => {
      dispatch(fetchListOfArticles(data.articles));
    });
  };

  return (
    <div className="sort">
      <div className="sort-options">
        <label htmlFor="sort">Sort by</label>
        <select onChange={sortArticlesByOptions} value={sortBy}>
          <option value="publishedAt">Published Date</option>
          <option value="popularity">Popularity</option>
          <option value="relevancy">Relevance</option>
        </select>
      </div>
    </div>
  );
};

export default SortOptions;
