import React, { Component } from 'react'
import logo from './logo.svg'
import Lifecycle from './Lifecycle'
import './App.css'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      intro: 'This is an example of a prop'
    }
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Lifecycles in React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Lifecycle
        intro={this.state.intro}
      />
    </div>
  }
}

