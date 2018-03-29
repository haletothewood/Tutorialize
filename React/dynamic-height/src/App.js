import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height: Math.floor(window.innerHeight)
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({height: window.innerHeight}))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateComponentHeight)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dynamic Height in React</h1>
        </header>
        <p className="App-intro">
          The current window height is: {this.state.height}
        </p>
      </div>
    )
  }
}

export default App
