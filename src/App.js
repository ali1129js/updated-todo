/**
 * @Author: Ali
 * @Date:   2019-01-05T09:14:04+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-05T19:53:49+01:00
 */

import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with Wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  };
  //Toggle Todo
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  //Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          delTodo={this.delTodo}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;
