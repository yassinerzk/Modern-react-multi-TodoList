import React, { Component } from "react";
import BoardTodoLists from "./BoardTodoLists/BoardTodoLists";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BoardTodoLists />
      </div>
    );
  }
}

export default App;
