/**
 * @Author: Ali
 * @Date:   2019-01-05T09:14:04+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-06T15:10:27+01:00
 */

import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Learn about local Storage",
        completed: false,
        color: "#e67e22"
      },
      {
        id: uuid.v4(),
        title: "Do more CSS",
        completed: false,
        color: "#95a5a6"
      },
      {
        id: uuid.v4(),
        title: "Update old projects",
        completed: false,
        color: "#f1c40f"
      },
      {
        id: uuid.v4(),
        title: "Deploy finished Apps",
        completed: false,
        color: "#58B19F"
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
      id: uuid.v4(),
      title,
      completed: false,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  listClear() {
    this.setState({ todos: [] });
  }
  alldone() {
    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        completed: true
      };
    });
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="toptitle"> Enhance Your Productivity </div>
          <AddTodo addTodo={this.addTodo} />
          <div className="todos">
            <Todos
              todos={this.state.todos}
              delTodo={this.delTodo}
              markComplete={this.markComplete}
            />
          </div>
          <button className="myButton" onClick={() => this.alldone()}>
            {" "}
            Check all Done{" "}
          </button>
          <button className="myButton" onClick={() => this.listClear()}>
            {" "}
            Clear the List{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
