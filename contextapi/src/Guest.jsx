import React, { Component } from 'react'
import User from "./Usere"
import Usere from './Usere'

export default class Guest extends Component {
  render() {
    return (
      <div>
        <h1>Guest Component </h1>
        <Usere nm = {this.props.name}/>
      </div>
    )
  }
}
