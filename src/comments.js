import React, { Component } from 'react'
import './comments.css'

class comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.addComment = this.addComment.bind(this)
    }

    handleChange(ev) {
        this.setState({
        comment: ev.target.value
        })
    }

    addComment(ev) {
        const state = {...this.state}
        const comment = {
            text: this.state.comment,
            time: new Date()
        }
        state.comments.push(comment)
        state.comment = ''
        this.setState(state)
    }
    render() {
        return(
            <div>
                <textarea placeholder = "Enter a comment (1000 Character Max)" value={this.state.comment} onChange={this.handleChange></textarea>
                <button className="button" onClick={this.addComment}>Submit Comment</button>
                {this.state.comments.map((comment, i) => <Comment key = {i} />)}
            </div>
            )
    }
}

function Comment(props) {
    return(
        <div className="comment" key={i}>
            <div>{comment.text}</div>
        </div>
    )
}

export default comments