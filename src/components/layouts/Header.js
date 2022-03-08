import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate('/');
    window.location.reload();
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
