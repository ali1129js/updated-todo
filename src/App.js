/**
 * @Author: Ali
 * @Date:   2019-01-05T09:14:04+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-06T12:34:34+01:00
 */

import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
        color: "#e67e22"
      },
      {
        id: 2,
        title: "Dinner with Wife",
        completed: false,
        color: "#95a5a6"
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false,
        color: "#f1c40f"
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
  //Add ToDo
  addTodo = title => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    };
    console.log(newTodo);
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            delTodo={this.delTodo}
            markComplete={this.markComplete}
          />
        </div>
      </div>
    );
  }
}

export default App;
