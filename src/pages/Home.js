import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import Blogicon from '../img/blogging.png'
import { connect } from 'react-redux'

// Blog icon from "https://www.flaticon.com/free-icons/blog" created by Freepik

class Home extends Component {
  // state = {
  //   posts: []
  // }
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts/')
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         posts: res.data.slice(0,10)
  //       });
  //     })
  // }
  render(){
    console.log(this.props);
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Blogicon} alt="A blog icon" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title cyan-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Bloggles Reading List</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)