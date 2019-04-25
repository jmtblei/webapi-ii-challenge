import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  fetchData = () => {
    axios
      .get('http://localhost:5000/api/posts/')
      .then(res => {
        console.log(res)
        this.setState({ posts: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.state.posts.map(post => {
          return (
            <h4 key={post.id}>
            Title: {post.title} <br/>
            Contents: {post.contents}
            </h4>
          )
        })}
      </div>
    )
  }
}

export default App;
