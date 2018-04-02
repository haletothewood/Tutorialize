import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

export default class Header extends Component {

  componentDidMount() {
    this.handleStyleChange()
  }

  handleStyleChange() {
    let observer = new MutationObserver((mutations) => {
      mutations.forEach(mutationRecord => {
        this.props.updateHeight(parseInt(this.refs.Header.style.height))
      }, (this))
    })
    const target = document.getElementById('Header')
    observer.observe(target, { attributes : true, attributeFilter : ['style'] })
  }

  render() {
    return <header ref='Header' id='Header' className="App-header" style={{height: this.props.height}}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Dynamic Height in React</h1>
      <p>The current header height is now: {this.props.height}</p>
    </header>
  }
}