import React, { Component } from 'react'

export default class Lifecycle extends Component {

  render() {
    return <div className="Name">
      {this.props.intro}
    </div>
  }
}