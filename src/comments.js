import React, { Component } from 'react'

class comments extends Component {
    render() {
        return(
            <div>
                <textarea placeholder = "Enter a comment (1000 Character Max)"></textarea>
                <button className="button">Submit Comment</button>
            </div>
        )
    }
}

export default comments