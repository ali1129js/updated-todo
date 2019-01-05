/**
 * @Author: Ali
 * @Date:   2019-01-05T09:16:28+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-05T09:30:14+01:00
 */
import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
  }
}
export default Todos;
