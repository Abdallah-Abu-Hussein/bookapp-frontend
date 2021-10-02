import React, { Component } from "react";
import BookRender from "./BookRender"

class Book extends Component {
    render() {
        return (
            <div>
                <BookRender key={this.props.index} 
                title={this.props.booksData.title} 
                author={this.props.booksData.author}
                description={this.props.booksData.description} 
                status={this.props.booksData.status}
                email={this.props.booksData.email} />
            </div>
        )
    }
}
export default Book;