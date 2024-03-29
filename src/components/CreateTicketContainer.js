import React from 'react';
import CreateTicket from './CreateTicket'
import { connect } from 'react-redux'
import { getEvents, getEvent } from '../actions/events'
import { createTicket } from '../actions/tickets'

class CreateTicketContainer extends React.Component {
  state = {
    userId: this.props.currentUser,
    eventId: this.props.event.id,
    price: '',
    image: '',
    description: '',
  }

  componentWillMount = () => {
    const id = this.props.match.params.id
    this.props.getEvents()
    this.props.getEvent(id)
}
  

onClick = (event) => {
  console.log('EVENT TARGET', event.target)
  alert(this.options[this.selectedIndex].text)
  const eventName = event.target.value
  console.log(eventName)

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
      currentEvent={this.props.event}
    />
  )
}
}

const mapStateToProps = state => ({
  events: state.events,
  event: state.event,
  currentUser: state.currentUser
})

const mapDispatchToProps = {
  getEvents,
  getEvent,
  createTicket
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicketContainer)