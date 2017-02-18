import React, { Component } from 'react';
import './ReadMore.css';


export default class ReadMore extends Component {


  render() {
    return(
      <div>
        <a href={`#ReadMoreModal${this.props.post.id}`}>Read More</a>
        <div id={`ReadMoreModal${this.props.post.id}`} className="modalDialog ReadMoreModal">
          <div>	<a href="#close" title="Close" className="close">X</a>
            <div className="titleReadMore">
              <p> {this.props.post.title} </p>
              <p> {this.props.post.post_date} </p>

            </div>
            <div className="imageReadMore">
              <img src={this.props.post.image_url} alt="test"/>
            </div>
            <div className="textReadMore">
              <p> {this.props.post.blog_entry} </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
