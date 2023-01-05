import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './NavBar.css';
const NavBar = ({ dogs }) => {
  let isActive = true;
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <li key="homepage" className="nav-li">
          <NavLink to="/dogs" className="nav-links {isActive ? 'active' : ''}">
            All Dogs
          </NavLink>
        </li>
        {dogs.map(({ name, id }) => {
          return (
            <li key={id} className="nav-li">
              <NavLink
                to={`/dogs/${name}`}
                className="nav-links {isActive ? 'active' : ''}"
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </nav>
  );
};

export default NavBar;
