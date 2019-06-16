import React from 'react';
import EventDetails from './EventDetails'
import { connect } from 'react-redux'
import { getEvent, getTickets } from '../actions'

class EventDetailsContainer extends React.Component {
  componentDidMount = () => {
    const id = this.props.match.params.id
    this.props.getEvent(id)
    this.props.getTickets(id)
  }

  render() {
    console.log('THIS PROPS tickets', this.props.tickets)
    return (
      <EventDetails
        event={this.props.event}
        tickets={this.props.tickets}
      />
    )
  }
}

const mapStateToProps = state => ({
  event: state.event,
  tickets: state.tickets
})

const mapDispatchToProps = {
  getEvent,
  getTickets
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)