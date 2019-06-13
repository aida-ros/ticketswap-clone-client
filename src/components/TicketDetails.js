import React from "react";

class TicketDetails extends React.Component {

  render() {
    const ticket = this.props.ticket
    const comments = this.props.comments

    function showTicket (ticket) {
      if (!ticket) {
        return <p>Loading ticket details...</p>
      }
      return <div>
        <h2>Ticket details</h2>
        <h3>Risk: X%</h3>
        <br/>

        <h4>Price</h4>
        <p>€{ticket.price}</p>
        <br/>
        <h4>Description: </h4>
        <p>{ticket.description}</p>
      </div>
    }

    function showImage (ticket) {
      if (ticket.image) {
        return <img src={ticket.image} alt="ticket" width="400" height="250" />
      }
      return
    }

    function showComments (comments) {
      if (!comments) {
        return <p>No comments have been added yet</p>
      }
      return comments.map(comment => 
        <p>{comment.content}</p>
        )
    }

    return (
      <main>
        {showTicket(ticket)}
        {showImage(ticket)}
        {showComments(comments)}
      </main>
    );
  }
}

export default TicketDetails;