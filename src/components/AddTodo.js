/**
 * @Author: Ali
 * @Date:   2019-01-06T10:08:49+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-06T12:05:18+01:00
 */
import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };
  handleChange = e => this.setState({ title: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Create new Todo ..."
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button> Add </button>
      </form>
    );
  }
}
export default AddTodo;
