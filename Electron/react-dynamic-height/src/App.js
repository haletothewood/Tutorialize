import React, { Component } from 'react'
import './App.css'
import Header from './Header'

const Rows = new Array(100).fill(1)

const HEADER_MARGIN = 180
const CONTENT_MARGIN = 110
const LINE_HEIGHT = 36

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height: Math.floor(window.innerHeight),
      headerHeight: HEADER_MARGIN
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({height: window.innerHeight}))
  }

  componentWillUnmount() {
    window.removeEventListener("resize")
  }

  updateHeaderHeight = (height) => {
    this.setState({
      headerHeight: height
    })
  }

  calculateRows() {
    return Math.floor((this.state.height-this.state.headerHeight-CONTENT_MARGIN)/LINE_HEIGHT)
  }

  renderRows() {
    return Rows.slice(0, this.calculateRows()).map((e, i) => {
      return <p key={'text-' + i}>Row {i+1}</p>
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          height={this.state.headerHeight}
          updateHeight={this.updateHeaderHeight}
        />
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
