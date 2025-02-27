import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated, user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Albeny</Link>
      </div>
      
      <div className="navbar-menu">
        {isAuthenticated ? (
          <>
            <span className="navbar-item">Hello, {user?.username}</span>
            <button onClick={onLogout} className="btn btn-outline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-item">Login</Link>
            <Link to="/register" className="navbar-item">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
