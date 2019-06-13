import React from 'react';
import TicketDetails from './TicketDetails.js'
import RiskRate from './RiskRate'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { getTicket, addComment, getComments } from '../actions'

class TicketDetailsContainer extends React.Component {
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

  calculateRisk = () => {
    const min = 5
    const max = 95
    const risk = 0

    if (risk < 5) {
      return min
    }

    if (risk > 95) {
      return max
    }
    console.log('CALCULATION DONE')

  }

  render() {
    const ticket = this.props.ticket
    const comments = this.props.comments

    return (
      <div>
        <RiskRate
          ticketId={this.props.match.params.id}/>
        <TicketDetails
          ticket={ticket}
          comments={comments}
          riskRate={this.calculateRisk}
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
  comments: state.comments
})

const mapDispatchToProps = {
  getTicket,
  addComment,
  getComments
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsContainer)