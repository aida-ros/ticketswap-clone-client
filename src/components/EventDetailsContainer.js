import React from 'react';
import EventDetails from './EventDetails'
import { connect } from 'react-redux'
import { getEvent } from '../actions'

class EventDetailsContainer extends React.Component {
  componentDidMount = () => {
    console.log(this.props)
    const id = this.props.match.params.id
    console.log(id)
    this.props.getEvent(id)
  }

  render() {
    return (
      <EventDetails
        events={this.props.events}
      />
    )
  }
}

const mapStateToProps = state => ({
  event: state.event
})

const mapDispatchToProps = {
  getEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)