import React from 'react';
import EventDetails from './EventDetails'
import { connect } from 'react-redux'
import { getEvent, getTickets } from '../actions'

class EventDetailsContainer extends React.Component {
  componentDidMount = () => {
    console.log(this.props)
    const id = this.props.match.params.id
    console.log(id)
    this.props.getEvent(id)
    
    this.props.getTickets()
    console.log(this.props.getTickets)
  }

  render() {
    console.log('THIS PROPS EVENT', this.props.event)
    return (
      <EventDetails
        event={this.props.event}
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