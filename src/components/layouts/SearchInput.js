import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchArticles } from '../../redux/actions/newsActions';

const SearchInput = () => {
  const [inputText, setInputText] = useState('');
  const sortValue = useSelector((state) => state.news.sortBy);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(searchArticles(inputText, sortValue));
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
