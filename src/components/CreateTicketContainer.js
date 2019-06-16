import React from 'react';
import CreateTicket from './CreateTicket'
import { connect } from 'react-redux'
import { getEvents } from '../actions/events'
import { createTicket } from '../actions/tickets'

class CreateTicketContainer extends React.Component {
  state = {
    userId: this.props.currentUser,
    price: '',
    image: '',
    description: '',
  }

  componentWillMount = () => {
    this.props.getEvents()
  }

handleChange = (event) => {
  console.log('EVENT TARGET', event.target)
  alert(this.options[this.selectedIndex].text)
  const eventId = event.target.value
  alert('worked')

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
  console.log('Ticket submitted!')
  this.props.createTicket(this.state)
  this.setState({
    price: '',
    image: '',
    description: '',
    eventName: ''
  })
}

render() {
  return (
    <CreateTicket
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      onClick={this.onClick}
      events={this.props.events}
    />
  )
}
}

const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.currentUser
})

const mapDispatchToProps = {
  getEvents,
  createTicket
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicketContainer)