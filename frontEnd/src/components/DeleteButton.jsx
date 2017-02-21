import React, { Component } from 'react';



export default class DeleteButton extends Component {



  render() {
    return(
      <div>
        <form action={`http://localhost:4000/delete/${this.props.post.id}`} method='POST'>
          <button className="styleDeleteBtn" type='submit' value='Submit' formMethod='POST' id={this.props.post.id}>
            Delete Post
          </button>
        </form>
      </div>
    )
  }
}
