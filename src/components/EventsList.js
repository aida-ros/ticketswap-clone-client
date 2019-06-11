import React from "react";

class EventsList extends React.Component {
  render() {
    return (
      <main>
        <div className="eventslist">
          <h1>All available events</h1>
          <p>EVENTS TO BE SHOWN HERE</p>
        </div>

        <div>
          <button>Create an event</button>
        </div>
      </main>
    );
  }
}

export default EventsList;