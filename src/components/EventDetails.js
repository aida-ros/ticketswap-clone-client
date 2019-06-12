import React from "react";
import { Link } from 'react-router-dom'

class EventDetails extends React.Component {

  render() {
    const event = this.props.event

    function showEvent(event) {
      if (!event) {
        return <p>Loading event details...</p>
      }
      return <div>
        <h1>Event details</h1>
        <p>Name: {event.name}</p>
        <p>Date: {event.start} - {event.end}</p>
        <p>Description: {event.description}</p>
      </div>
    }

    return (
      <main>
        {showEvent(event)}
      </main>
    );
  }
}

export default EventDetails;