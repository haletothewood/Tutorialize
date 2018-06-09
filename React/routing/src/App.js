import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

const Home = () => {
  return <div>
    <h1>🏠 Home</h1>
  </div>
}

const About = () => {
  return <div>
    <h1>👨‍💻 About</h1>
  </div>
}

const Links = () => {
  return <div>
    <h1>🔗 Links</h1>
  </div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Routing in React</h1>
        </header>
        <div className="Links-container">
          <p className="Link"><Link to="/home">Home</Link></p>
          <p className="Link"><Link to="/about">About</Link></p>
          <p className="Link"><Link to="/Links">Links</Link></p>
        </div>
        <p className="App-intro">
          This website is to demonstrate simple routing in React using React Router Dom
        </p>
        <div className="Page-container">
          <Route path="/home" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/links" component={ Links } />
        </div>
      </div>
    );
  }
}

export default App;
