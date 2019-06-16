import React from "react";
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

class EventsList extends React.Component {

  render() {
    const { events, onClick } = this.props
    console.log(events)

    function showEvents(events) {
      if (!events) {
        return <p>Loading events...</p>
      }
      return events.map(event =>
        <li key={event.id}>
          <Link to={`events/${event.id}`}>
            {event.name}<br />
          </Link>
          Starting on: {event.start}
        </li>)
    }

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <main>
          <Link to={`create/event`}>Create new event</Link>
          <br/>
          <br/>
          <Link to={`create/ticket`}>Submit a ticket for an existing event</Link>
          <div className="eventslist">
            <br />
            <Typography variant="h2">
              All available events
            </Typography>
            <ul>
              {showEvents(events)}
            </ul>
            <button onClick={onClick} name='9'>Next</button>
          </div>
        </main>

      </Grid>


    );
  }
}

export default EventsList;