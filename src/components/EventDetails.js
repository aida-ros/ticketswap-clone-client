import React from "react";
import { Link } from 'react-router-dom'

class EventDetails extends React.Component {

  render() {

    return (
      <main>
        <h1>Event details</h1>
        {this.props.events}
      </main>
    );
  }
}

export default EventDetails;