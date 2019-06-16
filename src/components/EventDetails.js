import React from "react";
import { Link } from 'react-router-dom'
import '../main.css'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

class EventDetails extends React.Component {

  render() {
    const event = this.props.event
    const tickets = this.props.tickets

    function showEvent(event) {
      if (!event) {
        return <p>Loading event details...</p>
      }
      return <div>
        <Typography variant="h2">
          Event details
        </Typography>
        <p>Name: {event.name}</p>
        <p>Date: {event.start} - {event.end}</p>
        <p>Description: {event.description}</p>
      </div>
    }

    function availableTickets(tickets) {
      if (!tickets) {
        return <p>Loading available tickets...</p>
      }

      return tickets.map(ticket => {
        if (ticket.eventId === event.id) {
          return <Link
            to={`${event.id}/tickets/${ticket.id}`}
            key={ticket.id}>
            €{ticket.price} submitted by userId{ticket.userId} <br />
          </Link>
        }
      })
    }

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <main>
          {/* <a href="create/ticket">Submit ticket for this event</a> */}
          {showEvent(event)}
          <br />
          
          <Typography variant="h4">
              Available tickets
          </Typography>
          {availableTickets(tickets)}
        </main>
      </Grid>


    );
  }
}

export default EventDetails;