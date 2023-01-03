import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = ({ dogs }) => {
  let isActive = true;
  return (
    <div>
      <ul>
        <li key="homepage">
          <NavLink to="" className={isActive ? 'active' : ''}></NavLink>
        </li>

        {dogs.map((dog) => (
          <li key={dog.id}>
            <NavLink to="" className={isActive ? 'active' : ''}>
              {dog.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
