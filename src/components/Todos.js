import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (

        <div className="todos collection-item" key={todo.id}>
          
          <div className="valign-wrapper" onClick={() => {deleteTodo(todo.id)}}>
            <div className="col s2">
              <a className="btn-floating btn-small blue"><i className="material-icons">clear</i></a>
            </div>
            <div className="col s10 todo-item">
              <span>{todo.content}</span>
            </div>
          </div>
          {/* <a className=" btn-floating waves-effect waves-light btn-small cyan right"><i className="material-icons">add</i></a> */}
        </div>

      )
    })
  ) : (
    <p className='center'>You have no todo's left, yay!</p>
  )
  return (
    <div className='todos collection'>
      {todoList}
    </div>
  )
}

export default Todos
