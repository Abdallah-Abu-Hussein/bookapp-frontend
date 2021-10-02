import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import './BestBooks.css';
import axios from 'axios';
import Book from './Component/Book';
import BookForm from './Component/Form';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    Book_Data: [],
      searchQuery: '',
    }
  }

  componentDidMount = async () => {

    let email = this.props.auth0.user.email

    let Url = `${process.env.REACT_APP_SERVER}/getBook?email=${email}`;

    let Data2 = await axios.get(Url);

    this.setState({
    Book_Data: Data2.data
    })
  }

  createBook = async (event) => {
    event.preventDefault()
    let bookFormInfo = {
      title1: event.target.title.value,
      author1: event.target.author.value,
      description1: event.target.description.value,
      status1: event.target.status.value,
      email1: this.props.auth0.user.email
    }
    let createData = await axios.post(`${process.env.REACT_APP_SERVER}/createBook`, bookFormInfo);
    this.setState({
    Book_Data: createData.data
    })

  }

  deleteBook = async (bookID) => {

    let email = this.props.auth0.user.email

    let deleteData = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteBook?bookID=${bookID}&email=${email}`)

    this.setState({
    Book_Data: deleteData.data
    })

  }

  render() {
    return (
      <div>
        <Card style={{ width: '80rem' }}>
          <Card.Body>
            <Card.Title>My Favoured Books</Card.Title>
            <Card.Text>
              <br />
              <BookForm createBook={this.createBook} />
              <br />
              {this.state.Book_Data.map((ele, idx) => {
                return (
                  <Book Book_Data={ele}
                    idx={idx}
                    deleteBookFun={this.deleteBook}
                     />
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
