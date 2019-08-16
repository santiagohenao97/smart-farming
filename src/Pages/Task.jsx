import React, { Component } from 'react';

import './Styles/TaskStyle.css'
import TodoApp from '../Components/TaskComponent/ToDoAppComponent'



class Task extends React.Component {
  state={
    todoItems :[{index: 1, value: "learn react", done: false}],

  }


  crud={
    
  }
  handleChange = e => {
    const todoItems = [...this.state.todoItems]
    todoItems.push(e.target.value)
    this.setState({
        todoItems
    })
}
addItem(todoItems) {
  this.state.todoItems.unshift({
    index: this.state.todoItems.length+1, 
    value: todoItems.newItemValue, 
    done: false
  });
  //this.setState({todoItems: this.state.todoItems});this.setState({todoItems: this.state.todoItems});
}
removeItem (itemIndex) {
  this.state.todoItems.splice(itemIndex, 1);
  //this.setState({todoItems: this.state.todoItems});
}
markTodoDone(itemIndex) {
  var todo = this.state.todoItems[itemIndex];
  this.state.todoItems.splice(itemIndex, 1);
  todo.done = !todo.done;
  todo.done ? this.state.todoItems.push(todo) : this.state.todoItems.unshift(todo);
  //this.setState({todoItems: this.state.todoItems});  
}
  render () {
    return (
    <TodoApp initItems={this.state.todoItems} task={this.handleChange}  />
    )
  }
}

export default Task;


