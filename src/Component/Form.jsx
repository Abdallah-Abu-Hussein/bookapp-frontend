import React, { Component } from "react";
import BookFormRender from "./FormRender"

class Book extends Component {
    render() {
        return (
                <BookFormRender createBookFun={this.props.createBookFun} />
        )
    }
}
export default Book