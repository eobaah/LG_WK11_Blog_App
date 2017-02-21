import React, { Component } from 'react';
import DeleteButton from './DeleteButton.jsx';
import EditModal from './EditModal.jsx';
import ReadMore from './ReadMore.jsx';


export default class Post extends Component {



  render() {
    const post = this.props.blog
    return(
      <div className="postContainer">
        <div className="postContent">
          <h1>{post.title}</h1>
          <p>{post.snippet}</p>
          <div className="tagsDateWrapper">
            <p className="postDate">{post.post_date}</p>
            <p>{post.tags}</p>
          </div>
        </div>
        <div className="imageContainer">
          <img className="postImage" src={post.image_url} alt="blog" />
          <div className="editDeleteControls">
            <ReadMore post={post}/>
            <DeleteButton post={post}/>
            <EditModal post={post}/>
          </div>
        </div>
      </div>
    )
  }
}
