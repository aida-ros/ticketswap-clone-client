import React from 'react';
import TicketDetails from './TicketDetails.js'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { getTicket } from '../actions/tickets'
import {addComment, getComments } from '../actions/comments'

class TicketDetailsContainer extends React.Component {
  componentWillMount = () => {
    const id = this.props.match.params.id
    this.props.getTicket(id)
    this.props.getComments(id)
  }
  
  state = {
    comment: '',
    ticketId: this.props.match.params.id
  }

  onChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log('Comment submitted!')
    this.props.addComment(this.state);
    this.setState({
      comment: ''
    })
  };


  render() {
    const { ticket, comments, riskRate } = this.props

    return (
      <div>
        <TicketDetails
          ticket={ticket}
          comments={comments}
          ticketId={this.props.match.params.id}
          riskRate={riskRate}
           />
        <CommentForm
          onChange={this.onChange}
          onSubmit={this.onSubmit} />
      </div>

    )
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket,
  comments: state.comments,
  riskRate: state.riskRate
})

const mapDispatchToProps = {
  getTicket,
  addComment,
  getComments
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsContainer)