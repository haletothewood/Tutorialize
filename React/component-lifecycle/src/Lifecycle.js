import React, { Component } from 'react'
import './Lifecycle.css'
import Styles from './Styles'

export default class Lifecycle extends Component {

  constructor() {
    super()
    console.log('%c constructor => Child', Styles.constructor)
  }

  componentWillReceiveProps() {
    console.log('%c componentWillReceiveProps ', Styles.props)
  }

  render() {
    console.log('%c render => Child', Styles.render)
    return <div className="Name">
      <h3>{this.props.message}</h3>
      <p>Please read the console in Web Tools to see component lifecycle in action</p>
    </div>
  }
}