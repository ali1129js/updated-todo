/**
 * @Author: Ali
 * @Date:   2019-01-05T09:16:28+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-06T14:09:29+01:00
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        delTodo={this.props.delTodo}
        markComplete={this.props.markComplete}
      />
    ));
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  delTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired
};
export default Todos;
