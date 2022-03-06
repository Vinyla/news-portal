import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSrotingValue } from '../redux/actions/newsActions';

const SortOptions = () => {
  const sortValue = useSelector((state) => state.news.sortBy);
  const dispatch = useDispatch();
  console.log(sortValue);

  return (
    <div className="sort">
      <h3>Sort by</h3>
      <div className="sort-options">
        <select
          onChange={(e) => dispatch(setSrotingValue(e.target.value))}
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
