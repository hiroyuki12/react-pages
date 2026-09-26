import React, { Component } from 'react'

class Clock extends Component {
  render() {
    return ( 
      <h2>{this.props.time}</h2>
    )
  }
}

export default Clock
