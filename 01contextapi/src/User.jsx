import React, { Component } from 'react'
import { Mycontext } from './App'

export default class User extends Component {
  render() {
    return (
      <div>
        <h3>User Component</h3>
        <Mycontext.Consumer>

            {({data,handleClick})=>(   //  handleClick:this.handleClickContex  name should be same app.jsx file compare
            <>
               <h2> {data.name} {data.value}</h2>
                <button onClick={handleClick}>
                        change value
                </button>
            </>
            )}
        </Mycontext.Consumer>
      </div>
    )
  }
}
