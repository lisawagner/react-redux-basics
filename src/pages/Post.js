import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'
// import axios from 'axios'

// The axios/jsonplaceholder get injects a post on all pages 
// Two solutions:
//  1. Use <Switch> in routes stack
//  2. Add {'/posts/' + post.id} in Link + path='/posts/:post_id' in route
class Post extends Component {
  
  // state = {
  //   post: null
  // }
  // componentDidMount(){
  //   let id = this.props.match.params.post_id;
  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then(res => {
  //       this.setState({
  //         post: res.data
  //       });
  //       //console.log(res.data);
  //     });
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    // redirect user after deletion
    this.props.history.push('/')
  }

  render() {
    console.log(this.props);

    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick} >
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find(post => post.id === id)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)