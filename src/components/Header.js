import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export default () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button
          className="button button--link"
          type="button"
          onClick={startLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  </header>
);
