import React from "react";
import { Link } from 'react-router-dom'
import '../main.css'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

class EventsList extends React.Component {

  render() {
    const { events, onNext, onPrev } = this.props
    console.log(events)

    function showEvents(events) {
      if (!events) {
        return <p>Loading events...</p>
      }
      return events.map(event =>
        <li key={event.id}>
          <Link
            to={`events/${event.id}`}
            className='event-link'>
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
          <Link
            to={`/signup`}
            className='link'>Still need to sign up? Click here</Link>
          <br />
          <Link
            to={`/login`}
            className='link'>Forgot to log in? Click here</Link>
          <br />
          <Link
            to={`create/event`}
            className='link-event'>Create new event</Link>
          <br />
          <br />

          <div className="eventslist">
            <br />
            <Typography variant="h2">
              All available events
            </Typography>
            <ul>
              {showEvents(events)}
            </ul>

            {/* <button onClick={onPrev} name='9'>Previous</button> */}
            <button onClick={onNext} name='9'>Next</button>
          </div>
        </main>

      </Grid>


    );
  }
}

export default EventsList;