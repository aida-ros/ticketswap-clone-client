import React from 'react';
import CreateEvent from './CreateEvent'
import { connect } from 'react-redux'
import { createEvent } from '../actions'

class CreateEventContainer extends React.Component {
  state = {}

  onChange = (event) => {
    // console.log("EVENT.TARGET.NAME", event.target.name)
    // console.log("EVENT.TARGET.VALUE", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted!')
    this.props.createEvent(this.state)
    this.setState({})
  }

  render() {
    return (
      <CreateEvent
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const mapDispatchToProps = {
  createEvent
}

export default connect(null, mapDispatchToProps)(CreateEventContainer)