import React, { Component } from 'react'
import logo from './logo.svg'
import Lifecycle from './Lifecycle'
import './App.css'
import Styles from './Styles'

export default class App extends Component {

  state = {
    message: 'This won\'t be rendered' 
  }

  constructor() {
    console.log('%c constructor => Parent', Styles.constructor)
    super()
    this.state = {
      message: 'This is an example of a prop'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('%c shouldComponentUpdate ', Styles.componentHook)
    return nextState.message !== this.state.message ? true : false
  }
  
  componentWillMount() {
    console.log('%c componentWillMount ', Styles.componentHook)
  }

  componentDidMount() { 
    console.log('%c componentDidMount ', Styles.componentHook)
  }

  componentDidUpdate(){
    console.log('%c componentDidUpdate ', Styles.componentHook)
  }

  componentWillUpdate() {
    console.log('%c componentWillUpdate ', Styles.componentHook)
  }

  componentWillUnmount() {
    console.log('%c componentWillUnmount ', Styles.componentHook)
  }

  handleSubmit = (event) => {
    console.log('%c Submit Event ', Styles.event)
    this.setState({
      message: this.state.value
    }, () => console.log('State Changed', this.state))
    event.preventDefault()
  }

  handleChange = (event) => {
    console.log('%c Change Event ', Styles.event)
    this.setState({
      value: event.target.value
    }, () => console.log('State Changed', this.state))
  }

  render() {
    console.log('%c render => Parent', Styles.render)
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Lifecycles in React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <form onSubmit={this.handleSubmit}>
        <label>
          Write new message:
          <input type="text" name="message" onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <Lifecycle
        message={this.state.message}
      />
    </div>
  }
}

