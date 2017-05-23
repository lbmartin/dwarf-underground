import React, { Component } from 'react'
import './Header.css'

const links = ['home', 'about', 'login']

class NavLinks extends Component {
  render() {
      const links = this.props.links.map(link => <a href="#">(link)</a>)
    return (
          <div className="float-right nav-links">
           {links}
          </div>
    )
  }
}

export default NavLinks