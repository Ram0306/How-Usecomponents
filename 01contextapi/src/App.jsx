import React, { Component } from 'react'
import Guest from './Guest';
export const Mycontext = React.createContext();



export default class App extends Component {
  state = {
    name :"Ram",
    value:10
  };
  handleClickContext = ()=>{
    this.setState({value:this.state.value + 1});
  }
  render() {
    const contextvalue={
      data:this.state,
      handleClick:this.handleClickContext  
    };
    return (
      <Mycontext.Provider value={contextvalue}>
        <Guest/>

      </Mycontext.Provider>
    )
  }
}

