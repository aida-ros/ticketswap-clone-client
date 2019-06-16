import React from "react";
import Grid from '@material-ui/core/Grid'
import '../main.css'

class TicketDetails extends React.Component {

  render() {
    console.log('Risk rate', this.props.riskRate)
    const { ticket, comments, riskRate } = this.props
    

    function showTicket(ticket) {
      if (!ticket && riskRate) {
        return <p>Loading ticket details...</p>
      }
      return <div>
        <h1>Ticket details</h1>
        <h2>Risk rate: {riskRate}%</h2>
        <br />

        <h4>Price</h4>
        <p>€{ticket.price}</p>
        <br />
        <h4>Description: </h4>
        <p>{ticket.description}</p>
      </div>
    }

    function showImage(ticket) {
      if (ticket.image) {
        return <img src={ticket.image} alt="ticket" width="400" height="250" />
      }
      return
    }

    function showComments(comments) {
      if (!comments) {
        return <p>No comments have been added yet</p>
      }
      return comments.map(comment => {
        
        return <p key={comment.id}>Commented at {comment.createdAt}:
        <br />
        <br/> "{comment.content}"</p>
      }
        
      )
    }

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <main>
          {showTicket(ticket)}
          {showImage(ticket)}
          <br />
          <h3>Comments:</h3>
          {showComments(comments)}
        </main>
      </Grid>


    );
  }
}

export default TicketDetails;