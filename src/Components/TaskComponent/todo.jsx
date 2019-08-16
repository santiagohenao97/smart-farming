/*
Todo app structure

TodoApp
	- TodoHeader
	- TodoList
    - TodoListItem #1
		- TodoListItem #2
		  ...
		- TodoListItem #N
	- TodoForm
*/

import React, { Component } from 'react';
import './todo.css'

class TodoList extends React.Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}
  
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render () {
    var todoClass = this.props.item.done ? 
        "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
        <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}><i class="fas fa-check"></i></span>
          {this.props.item.value}
          <button type="button btn-success" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>     
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.props.addItem(newItemValue);
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" className="text-light" ref="itemName" className="form-control" placeholder="agregar nueva tarea"/>
        <button type="submit" className="btn btn-default">Agregar</button> 
      </form>
    );   
  }
}
  
class TodoHeader extends React.Component {
  render () {
    return <h1>Mis actividades pendientes</h1>;
  }
}
  
class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    
  }
  addItem(todoItem) {
    const todoItems=[...this.state.todoItems]

    todoItems.unshift({
      index: this.state.todoItems.length+1, 
      value: todoItem, 
      done: false
    });
    this.setState({todoItems})
  }
  removeItem (itemIndex) {
    const todoItems=[...this.state.todoItems] 
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems})
  }
  markTodoDone(itemIndex) {
    const todoItems=[...this.state.todoItems] 
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems})
     
  }
  
    state={
        todoItems :[{index: 1, value: "Agregar mi primera tarea", done: false}],
    
      }
  
  render() {

    
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}
 export default TodoApp;
