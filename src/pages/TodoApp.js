import React, { Component } from 'react'
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'

export default class TodoApp extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'do laundry'}
    ]
  }

  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      // todos: todos
      todos
    })
  }

  addTodo = (todo) => { 
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
   }

  render() {
    return (
      <div className="todo-app container">
        <h1 className='center blue-text' >Todo's</h1>

          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
          
      </div>
    )
  }
}
