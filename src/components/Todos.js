/**
 * @Author: Ali
 * @Date:   2019-01-05T09:16:28+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-05T09:59:09+01:00
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
export default Todos;
