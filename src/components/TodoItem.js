/**
 * @Author: Ali
 * @Date:   2019-01-05T09:25:48+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-05T10:01:31+01:00
 */
import React from "react";
import PropTypes from "prop-types";

const TodoItem = props => <div>{props.todo.title}</div>;

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
export default TodoItem;
