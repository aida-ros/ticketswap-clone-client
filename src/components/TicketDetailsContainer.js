import React from 'react';
import TicketDetails from './TicketDetails.js'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { getTicket, addComment } from '../actions'

class TicketDetailsContainer extends React.Component {
  state = {
    comment: '',
    ticketId: this.props.match.params.id
  }
  
  componentDidMount = () => {
    const id = this.props.match.params.id
    this.props.getTicket(id)
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
    const ticket = this.props.ticket
    return (
      <div>
        <TicketDetails
          ticket={ticket} />
        <CommentForm
          onChange={this.onChange}
          onSubmit={this.onSubmit} />
      </div>

    )
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket
})

const mapDispatchToProps = {
  getTicket,
  addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsContainer)