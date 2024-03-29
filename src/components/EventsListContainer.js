import React from 'react';
import EventsList from './EventsList'
import { connect } from 'react-redux'
import { getEvents } from '../actions/events'

class EventsListContainer extends React.Component {
  componentDidMount = () => {
    console.log(this.props)
    this.props.getEvents()
  }

  onNext = (event) => {
    let offset = 0
    const parsed = parseInt(event.target.name)
    
    offset = offset + parsed
    this.props.getEvents(offset)

    const next = parsed + 9
    const newOffset = next.toString()
    event.target.name = newOffset
  }

  onPrev = (event) => {
    let offset = 0
    const parsed = parseInt(event.target.name)
    
    offset = parsed - offset
    this.props.getEvents(offset)

    const prev = parsed - 9
    const newOffset = prev.toString()
    event.target.name = newOffset
  }

  render() {
    return (
      <EventsList
        events={this.props.events}
        onNext={this.onNext}
        // onPrev={this.onPrev}
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