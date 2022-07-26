import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Back to Pokedex</Link>
      </div>
    )
  }
}

export default NotFound;