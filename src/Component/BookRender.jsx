
import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class BookRender extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Book info</Card.Title>
                        <Card.Text>
                            <p>Title: {this.props.title}</p>
                            <p>Author: {this.props.author}</p>
                            <p>Description: {this.props.description}</p>
                            <p>Status: {this.props.status}</p>
                            <p>Email: {this.props.email}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default BookRender