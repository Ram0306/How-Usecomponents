import React, { Component } from 'react'

export default class Usere extends Component {
  render() {
    return (
      <div>
        <h3>user component</h3>  
        <h4>{this.props.nm}</h4>
      </div>
    )
  }
}
