/**
 * @Author: Ali
 * @Date:   2019-01-05T09:25:48+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-06T15:07:40+01:00
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    const { id, title, color, completed } = this.props.todo;
    return (
      <div
        style={{
          textDecoration: completed ? "line-through" : "none",
          backgroundColor: color,
          padding: "10px"
        }}
      >
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            checked={completed}
          />
          {"  "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            {" "}
            X{" "}
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};
export default TodoItem;
