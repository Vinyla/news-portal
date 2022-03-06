import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortingValue } from '../redux/actions/newsActions';

const SortOptions = () => {
  const querry = useSelector((state) => state.news.querry);
  const sortBy = useSelector((state) => state.news.sortBy);
  const dispatch = useDispatch();

  const sortArticlesByOptions = (e) => {
    e.preventDefault();
    dispatch(setSortingValue(querry, e.target.value));
  };

  return (
    <div className="sort">
      <div className="sort-options">
        <label htmlFor="sort">Sort by</label>
        <select
          onChange={sortArticlesByOptions}
          value={sortBy}
          id="sort"
        >
          <option value="publishedAt">Published Date</option>
          <option value="popularity">Popularity</option>
          <option value="relevancy">Relevance</option>
        </select>
      </div>
    </div>
  );
};

export default SortOptions;
