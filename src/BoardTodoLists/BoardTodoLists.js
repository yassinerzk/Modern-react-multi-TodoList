import React, { Component } from "react";
import TodoList from "../TodoList/TodoList";
import uuid from "uuid/v4";
import "./BoardTodoLists.css";

import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class BoardTodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = { todoLists: [] };
    this.createTodolist = this.createTodolist.bind(this);
  }
  createTodolist() {
    let newTodoList = { id: uuid(), title: "Defaul Title" };
    this.setState({
      todoLists: [...this.state.todoLists, newTodoList],
    });
  }
  render() {
    const todosLists = this.state.todoLists.map((list) => {
      return (
        <CSSTransition key={list.id} timeout={500} classNames="todo">
          <TodoList key={list.id} id={list.id} title={list.title} />
        </CSSTransition>
      );
    });
    return (
      <div className="Boardwraper">
        <div className="AddSection">
          <h1>Add Multiple TodoLists</h1>
          <button onClick={this.createTodolist}>add new list</button>
        </div>
        <div className="Board">{todosLists}</div>
      </div>
    );
  }
}
