import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <ul className=''>
          <Link to="/">Home</Link>
          <Link to="/review">Order Review</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;