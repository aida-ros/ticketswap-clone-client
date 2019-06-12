import React from 'react';
import EventDetails from './EventDetails'
import { connect } from 'react-redux'
import { getEvents } from '../actions'

class EventDetailsContainer extends React.Component {

  render() {
    return (
      <EventDetails
        events={this.props.events}
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

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)