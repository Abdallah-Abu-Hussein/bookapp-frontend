import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import './BestBooks.css';
import axios from 'axios';
import Form from './Component/Form'
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
    let data2 = await axios.get(bookUrl);
    console.log("welcome home ");
    console.log(data2);
    this.setState({
      booksData: data2.data
    })
  }

  createBook = async (e) => {
    e.preventDefault()
    e.preventDefault()

    let bookFormInfo = {
      title1: e.target.title.value,
      author1: e.target.author.value,
      description1: e.target.description.value,
      status1: e.target.status.value,
      email1: this.props.auth0.user.email
    }

    let createData = await axios.post(`http://localhost:3001/createBook`,bookFormInfo);

    this.setState({
      booksData: createData.data
    })

  }
  deleteBook = async (bookID) => {

    let email = this.props.auth0.user.email

    let deleteData = await axios.delete(`http://localhost:3001/deleteBook?bookID=${bookID}&email=${email}`)

    console.log(deleteData);
    
    this.setState({
      booksData: deleteData.data
    })

  }
  
  render() {
    return (
      <div>
        <Card style={{ width: '80rem' }}>
          <Card.Body>
            <Card.Title>My BEST Books</Card.Title>
            <Card.Text>
            <br />
              <Form createBookFun={this.createBook} />
              <br />
              {this.state.booksData.map((element, index)=> {
                return (
                  <Book booksData={element} index={index} deleteBookFun={this.deleteBook}/>
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
