import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/tshirts">T-Shirt</Link>
          <Link to="/review">Order Review</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;