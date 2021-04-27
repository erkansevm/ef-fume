import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-title">
          EF-FUME
        </Link>
      </div>
      <div className="navbar-links">
        <h3 className="navbar-link">Shop</h3>
        <h3 className="navbar-link">About us</h3>
        <h3 className="navbar-link">Contact</h3>
      </div>
      <div className="navbar-basket-search">
        <div>
          <button type="button">
            <i className="fas fa-search" />
          </button>
          <input type="text" />
        </div>
        <Link to="/basket">
          <i className="fas fa-shopping-cart" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
