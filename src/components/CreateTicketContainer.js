import React from 'react';
import CreateTicket from './CreateTicket'
import { connect } from 'react-redux'
import { getEvents } from '../actions'

class CreateTicketContainer extends React.Component {
  state = {
    // only for demo purposes
    user: this.userid || Math.floor(Math.random() * 86),
    price: '',
    image: '',
    description: ''
  }

  componentWillMount = () => {
    this.props.getEvents()
  }

  onChange = (event) => {
    // console.log("EVENT.TARGET.NAME", event.target.name)
    // console.log("EVENT.TARGET.VALUE", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log('Ticket submitted!')
    this.props.createEvent(this.state)
    this.setState({})
  }

  render() {
    return (
      <CreateTicket
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = {
  getEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicketContainer)