import React, { Component } from 'react'
import Guest from "./Guest";

import"./App.css"
import"./index.css"

export default class App extends Component {
  state={
    name:"ram"
  }
  render() {
    return (
      <div>
             <Guest name={this.state.name} />
      </div>
    )
  }
}

