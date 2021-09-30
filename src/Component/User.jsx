/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class User extends Component {
  render() {
    const { user,isAuthenticated } = this.props.auth0;

    return isAuthenticated && (
        <>
        <img src={user.picture}  alt={`${user.name} picture`}/>
        <div>Hello {user.name}</div>
        <div>{user.email}</div>
        </>
    )
  }
}

export default withAuth0(User);