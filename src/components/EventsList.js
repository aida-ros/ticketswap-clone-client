import React from "react";
import { Link } from 'react-router-dom'

class EventsList extends React.Component {

  render() {
    const events = this.props.events
    console.log(events)

    function showEvents(events) {
      if (!events) {
        return <p>Loading events...</p>
      }
      return events.map(event =>
        <li key={event.id}>
          <Link to={`events/${event.id}`}>
            {event.name}<br/>
          </Link>
            Starting on: {event.start}
        </li>)
    }

    return (
      <main>
        <Link to={`create`}>Create new event</Link>
        <div className="eventslist">
          <h1>All available events</h1>
          <ul>
            {showEvents(events)}
          </ul>
        </div>
      </main>
    );
  }
}

export default EventsList;