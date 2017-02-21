import React, { Component } from 'react';
import moment from 'moment'
import './App.css';
import Post from './components/Post';
import Modal from './components/CreateModal';




export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    this.getThePosts()
  }

  getThePosts() {
    fetch( 'http://localhost:4000/api',{
      method: 'get',
    })
      .then( result => result.json() )
      .then( posts => {
        let initialPosts = posts.posts
        initialPosts = initialPosts.map( post => {
          const normalizedDate = normalizeDate(post.post_date)
          post.post_date = normalizedDate
          return post
        })
        this.setState({
          posts: initialPosts
        })
      })
        const normalizeDate = (date) =>{
          return moment(date).format('MMMM Do YYYY')
    }
}


  render() {

    let blogPosts= this.state.posts.map( blog =>
      <div key={blog.id} className="mainBlogs">
        <Post blog={blog}/>
      </div>
    )

    return (
      <div className="topContainer">
        <Modal />
        <div className="blogSection">
          {blogPosts}
        </div>
      </div>
    );
  }
}
