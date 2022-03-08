import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  fetchListOfArticles,
  loadingSpinner,
  setQuerry,
  sortArticles,
} from '../../redux/actions/newsActions';
import { searchDataFromApi } from '../../api/newsApi.js';

const SearchInput = () => {
  const [inputText, setInputText] = useState('');
  const sortBy = useSelector((state) => state.news.sortBy);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loadingSpinner());
    searchDataFromApi(inputText, sortBy).then((data) => {
      dispatch(fetchListOfArticles(data.articles));
    });
    dispatch(setQuerry(inputText));
    dispatch(sortArticles(sortBy));
    setInputText('');
    navigate('/');
  };

  return (
    <form onSubmit={onFormSubmit} action="submit" className="form">
      <input
        value={inputText}
        onChange={onInputChange}
        placeholder="Search.."
        type="text"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
