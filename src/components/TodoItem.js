/**
 * @Author: Ali
 * @Date:   2019-01-05T09:25:48+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-05T11:47:37+01:00
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    return <div style={this.getStyle()}>{this.props.todo.title}</div>;
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
export default TodoItem;
