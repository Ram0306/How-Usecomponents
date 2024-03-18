import React, { Component } from 'react'
import User from './User'
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h2>Guest Component</h2>
        <User/>
      </div>
    )
  }
}
