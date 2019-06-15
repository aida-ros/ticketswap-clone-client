import React from 'react';
import CreateTicket from './CreateTicket'
import { connect } from 'react-redux'
import { getEvents, createTicket } from '../actions'

class CreateTicketContainer extends React.Component {
  state = { 
    price: '',
    image: '',
    description: '',
  }

  componentWillMount = () => {
    this.props.getEvents()
  }

  onClick = (event) => {
    console.log('WHAHHWHHA',event)
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
  events: state.events
})

const mapDispatchToProps = {
  getEvents,
  createTicket
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicketContainer)