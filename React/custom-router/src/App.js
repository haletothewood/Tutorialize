import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';

//uses javascript alias syntax to set incoming component to Component, similar to 'import component as Component'
const BlinkingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Blink>
      <Component {...props}/>
    </Blink>
  )}/>
)

const Blink = (props) => {
  return <div className='Blink'>
    {props.children}
  </div>
}

const LinkedContainer = () => {
  return <h1 className='header'>
    Routing Works!
  </h1> 
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Click on this link right here <span role="img">➡️</span><Link to="/link">Link</Link>
        </p>
          <div>
            <BlinkingRoute path="/link" component={LinkedContainer}/>
          </div>
      </div>
    );
  }
}

export default App;
