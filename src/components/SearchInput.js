import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchArticles } from '../redux/actions/newsActions';

const SearchInput = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(searchArticles(inputText));
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
