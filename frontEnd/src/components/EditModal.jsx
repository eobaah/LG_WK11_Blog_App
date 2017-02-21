import React, { Component } from 'react';
import './CreateModal.css';


export default class EditModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: this.props.post.title,
      author: this.props.post.author,
      snippet: this.props.post.snippet,
      blog_entry: this.props.post.blog_entry,
      image_url: this.props.post.image_url,
      tags: this.props.post.tags
   }
}
  updateInput(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render() {
    return(
      <div>
        <a href={`#editModal${this.props.post.id}`}>Edit Post</a>
        <div id={`editModal${this.props.post.id}`} className="modalDialog">
          <div>	<a href="#close" title="Close" className="close">X</a>
            <form action={`http://localhost:4000/edit/${this.props.post.id}`} method='POST'>
              <div onChange={this.updateInput.bind(this)} className="formFields">
                <label> Title </label>
                <input className="createInput" type='text' name='title' value={this.state.title}></input>
                <label> Author </label>
                <input className="createInput" type='text' name='author' value={this.state.author} />
                <label> Caption </label>
                <textarea className="createInput" rows='4' name='snippet' value={this.state.snippet}></textarea>
                <label> Content </label>
                <textarea className="createInput" rows='4' name='blog_entry' value={this.state.blog_entry}></textarea>
                <label> Image </label>
                <input className="createInput" type='text' name='image_url' value={this.state.image_url} />
                <label> Tags </label>
                <input className="createInput" type='text' name='tags' value={this.state.tags} />
                <button type='submit' value='Submit' formMethod='post'>
                  Edit Button
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
