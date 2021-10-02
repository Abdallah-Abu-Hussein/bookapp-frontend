import React, { Component } from "react";
import BookRender from "./BookRender"

class Book extends Component {
    render() {
        return (
            <>
                <BookRender 
                    deleteBookFun={this.props.deleteBookFun} 
                    key={this.props.index}
                    title={this.props.Book_Data.title} 
                    author={this.props.Book_Data.author}
                    description={this.props.Book_Data.description}
                    status={this.props.Book_Data.status}
                    email={this.props.Book_Data.email} 
                    id={this.props.Book_Data._id}/>
            </>
        )
    }
}
export default Book