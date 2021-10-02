import React, { Component } from "react";
import FormRender from "./FormRender"

class Book extends Component {
    render() {
        return (
                <FormRender createBook={this.props.createBook} />
        )
    }
}
export default Book