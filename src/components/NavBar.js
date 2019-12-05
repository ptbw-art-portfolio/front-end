import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from './LoginForm'
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
      <LoginForm />
    </NavBarMenu>
  );
}

export default NavBar;
