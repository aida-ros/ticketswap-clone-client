import React from 'react';
import CreateEvent from './CreateEvent'

class CreateEventContainer extends React.Component {
  state = {
    name: '',
    image: '',
    description: '',
    start: '',
    end: ''
  }

  onChange = (event) => {
    console.log("EVENT.TARGET.NAME", event.target.name)
    console.log("EVENT.TARGET.VALUE", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted!')
    this.props.createEvent(this.state)
    this.setState({
      name: '',
      date: '',
      description: ''
    })
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

export default CreateEventContainer;