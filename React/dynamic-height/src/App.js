import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const Rows = new Array(100).fill(1)

const HEADER_MARGIN = 260
const LINE_HEIGHT = 36

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

  calculateRows() {
    return Math.floor((this.state.height-HEADER_MARGIN)/LINE_HEIGHT)
  }

  renderRows() {
    return Rows.slice(0, this.calculateRows()).map((e, i) => {
      return <p key={'text-' + i}>Row {i+1}</p>
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dynamic Height in React</h1>
        </header>
        <p className="App-intro">
          The current window height is now: {this.state.height}
          <br />
          The number of rendered rows is now: {this.calculateRows()}
        </p>
        <div>
          {this.renderRows()}
        </div>
      </div>
    )
  }
}

export default App
