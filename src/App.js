import React from 'react';
import Header from './Header';
import BestBooks from './BestBooks'
import Login from './Login'
import { Image } from 'react-bootstrap';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import User from './Component/User';
import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <><BestBooks />   <Image src="https://www.damngooddoormats.com/sites/damngooddoormats.indiemade.com/files/imagecache/im_clientsite_product_detail/welcome-i-hope-you-brought-snacks-funny-welcome-mat-housewarming-gift-damn-good-doormat_3.jpg? " thumbnail /></>: <Login /> }
              </Route>
              <Route path="/profile" component={User}/>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
