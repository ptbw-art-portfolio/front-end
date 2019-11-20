import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddPostModal from './AddPostModal';
// import './NavBar.css';

const NavBarMenu = styled.nav`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  border: 1px solid red;
  height: 3rem;
  width: 100%;
`

const NavIcon = styled.i`
  font-size: 2rem;
  margin: .5rem;

  :hover {
    color: gray;
  }

  :nth-child(5) {
    margin-right: 1rem;
  }
`

function NavBar() {
  return (
    <NavBarMenu>
      <AddPostModal />
      
      <Link to='/'>
        <NavIcon className="fas fa-home" title="Home"></NavIcon>
      </Link>

      <Link to='/upload'>
      <NavIcon className="fas fa-plus-circle" title="Upload"></NavIcon>
      </Link>

      <Link to='/sign-in'>
      <NavIcon className="fas fa-sign-in-alt" title="Sign in/Register"></NavIcon>
      </Link>
    </NavBarMenu>

    
  );
}

export default NavBar;
