import React, { Component } from 'react';

import TodoHeader from '../TaskComponent/ToDoHeaderComponent';
import TodoList from '../TaskComponent/ToDoListComponent';
import TodoForm from '../TaskComponent/ToDoFormComponent';



class TodoApp extends React.Component {
    constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markTodoDone = this.markTodoDone.bind(this);
      
    }

    state={
      todoItem:[...this.props.initItems],
    }

    
    render() {
      return (
        <div id="main">
          <TodoHeader />
          <TodoList items={this.state.todoItem} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
          <TodoForm addItem={this.addItem} />
        </div>
      );
    }
  }

  export default TodoApp;