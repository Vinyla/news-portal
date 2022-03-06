import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchArticles } from '../../redux/actions/newsActions';
import SearchInput from './SearchInput';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate('/');
    dispatch(fetchArticles());
  };

  return (
    <div className="header">
      <div className="logo">
        <img onClick={returnToHome} src={logo} alt="logo" />
      </div>
      <SearchInput />
    </div>
  );
};

export default Header;
