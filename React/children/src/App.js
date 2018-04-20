import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={ <Title /> }>
          <Child />
        </Header>
      </div>
    )
  }
}

const Header = ({ title, children }) => {
  return (
    <header>
      { title }
      { children }
    </header>
  )
}

const Title = () => {
  return <div className="Title">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to Tutorialize</h1>
  </header>
  <p className="App-intro">
    Below you will see a child component represented as a string. Remove the children prop from <code>Header</code> in <code>App.js</code> and see what happens!
  </p>
  </div>
}

const Child = () => {
  return <div>
      <img src='https://media.giphy.com/media/2zcFsDxUi97dC/giphy.gif'/>
  </div>
}