import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import './BestBooks.css';
import axios from 'axios';
import Book from './Component/Book';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      searchQuery: ''
    }
  }

  componentDidMount = async () => {

    let email = this.props.auth0.user.email;

    let bookUrl = `http://localhost:3001/book?email=${email}`;//use abdallh11332244666@gmail.com to test
    let bData = await axios.get(bookUrl);
    console.log("welcome home ");
    console.log(bData);
    this.setState({
      booksData: bData.data
    })
  }
  
  render() {
    return (
      <div>
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title>My Fav Books</Card.Title>
            <Card.Text>
              {this.state.booksData.map((element, index)=> {
                return (
                  <Book booksData={element} index={index}/>
                )
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
