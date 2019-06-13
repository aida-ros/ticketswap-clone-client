import React from "react";

class EventDetails extends React.Component {

  render() {
    const event = this.props.event
    const tickets = this.props.tickets

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

    function availableTickets(tickets) {
      if (!tickets) {
        return <p>Loading available tickets...</p>
      }

      return tickets.map(ticket => {
        if (ticket.eventId === event.id) {
          return <li>€{ticket.price} submitted by {ticket.userId}</li>
        }

      })
    }

    return (
      <main>
        {showEvent(event)}
        <br/>
        
        <h2>Available tickets</h2>
        {availableTickets(tickets)}
      </main>
    );
  }
}

export default EventDetails;