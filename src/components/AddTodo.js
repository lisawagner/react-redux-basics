import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })

  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    this.props.addTodo(this.state)
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div className="add-todo" >
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12">
              <div className="input-field inline col s12">
                <label>Add new todo:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content} />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
