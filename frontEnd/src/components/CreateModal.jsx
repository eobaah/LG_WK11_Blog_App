import React, { Component } from 'react';
import './CreateModal.css';


export default class Modal extends Component {



  render() {
    return(
      <div>
        <a href="#openModal">Open Modal</a>
        <div id="openModal" className="modalDialog">
          <div>	<a href="#close" title="Close" className="close">X</a>
            <form action='http://localhost:4000/create' method='POST'>
              <div className="formFields">
                <label> Title </label>
                <input className="createInput" type='text' name='title' placeholder='Title for your post' />
                <label> Author </label>
                <input className="createInput" type='text' name='author' placeholder='Who are you?' />
                <label> Caption </label>
                <textarea className="createInput" rows='4' name='snippet' placeholder='Short summary'></textarea>
                <label> Content </label>
                <textarea className="createInput" rows='4' name='blog_entry' placeholder='Enter blog post'></textarea>
                <label> Image </label>
                <input className="createInput" type='text' name='image_url' placeholder='Enter image url' />
                <label> Tags </label>
                <input className="createInput" type='text' name='tags' placeholder='tags' />
                <button type='submit' value='Submit' formMethod='POST'>Create Post</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
