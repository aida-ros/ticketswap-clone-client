import React from 'react';
import EventsList from './EventsList'
import { connect } from 'react-redux'
import { getEvents } from '../actions'

class EventsListContainer extends React.Component {
  componentDidMount = () => {
    console.log(this.props)
    this.props.getEvents()
  }

  render() {
    // console.log(this.props.events)
    return (
      <EventsList
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

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer)