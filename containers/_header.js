import Header from '../components/Header'
import React, { Component } from 'react'
class _header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'my header'
    }
  } 

  componentDidMount() {
  }

  render() {
    return (<Header text={this.state.text} />)
  }
}
export default _header