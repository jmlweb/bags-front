import React from 'react';
import styled from '@xstyled/styled-components';
import { NavLink } from 'react-router-dom';

const SNavLink = styled(NavLink)`
  margin-left: 4;
  text-decoration: none;
  color: secondary;
  font-weight: 700;
  font-size: 4;
  transition: color 0.4s;
  &:hover {
    color: secondaryBright;
  }
`;

const MainHeaderNav = () => (
  <nav>
    <SNavLink to="/user">Users</SNavLink>
    <SNavLink to="/order">Orders</SNavLink>
  </nav>
);

export default MainHeaderNav;
