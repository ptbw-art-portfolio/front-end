import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Login'
import CreatePost from './CreatePost';

const NavBarMenu = styled.nav`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  border: 1px solid red;
  height: 3rem;
  width: 100%;
  padding-right: 1rem;
`

const NavIcon = styled.i`
  font-size: 2rem;
  margin: .5rem;

  :hover {
    color: gray;
  }
`

function NavBar() {
  return (
    <NavBarMenu>
      
      <Link to='/'>
        <NavIcon className="fas fa-home" title="Home"></NavIcon>
      </Link>

    <CreatePost />

      {/* <Link to='/sign-in'>
      <NavIcon className="fas fa-sign-in-alt" title="Sign in/Register"></NavIcon>
      </Link> */}
      <Login />
    </NavBarMenu>
  );
}

export default NavBar;
