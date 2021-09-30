import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from './Component/LoginButton';
import LogoutButton from './Component/LogoutButton';
import {withAuth0} from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link className={'m-2'}to="/">Home</Link>
        <Link className={'m-2'}to="/profile">Profile</Link>
        {!this.props.auth0.isAuthenticated} {
          <LoginButton className={'m-50'}id="login" />
        }
        {this.props.auth0.isAuthenticated} {
          <LogoutButton className={'m-50'} id="logout" />
        }
      </Navbar>
    );
  }
}

export default withAuth0(Header);
