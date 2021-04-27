import React from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar container">
      <Link to="/" className="navbar-brand-links">
        <h1 className="navbar-brand-title">EF-FUME</h1>
      </Link>
      <div className="navbar-links">
        <h3 className="navbar-link">Shop</h3>
        <h3 className="navbar-link">About us</h3>
        <h3 className="navbar-link">Contact</h3>
      </div>
      <div className="navbar-basket-search">
        <div className="navbar-search">
          <button className="navbar-search-button" type="button">
            <i className="fas fa-search" />
          </button>
          <input type="text" placeholder="What are you looking for" />
        </div>
        <Link className="navbar-basket" to="/basket">
          <i className="fas fa-shopping-cart" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
