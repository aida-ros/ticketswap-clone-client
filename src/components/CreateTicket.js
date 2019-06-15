import React from 'react';

class CreateTicket extends React.Component {

  render() {
    const { onChange, onSubmit, events } = this.props

    function eventsMenu(events) {
      if (!events) {
        return <p>Looking for active events...</p>
      }
      return events.map(event => <option key={event.id} name={event.id}>{event.name}</option>)
    }

    return (
      <main>
        <h1>Create new ticket</h1>

        <div>
          <form onSubmit={onSubmit}>

            <h5>Select event</h5>
            <select onChange={onChange} name="eventName">
              {eventsMenu(events)}
            </select>
            <br />

            <h5>Set price</h5>
            <label>
              <input
                onChange={onChange}
                type="number"
                step="any"
                placeholder="Price"
                name="price" />
            </label>
            <br />

            <h5>Submit an image (optional)</h5>
            <label>
              <input
                onChange={onChange}
                type="url"
                placeholder="http://www.example-url.com'"
                name="image" />
            </label>
            <br />

            <h5>Add a description</h5>
            <label>
              <input
                onChange={onChange}
                type="text"
                placeholder="Description"
                name="description" />
            </label>
            <br />
            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>

      </main>
    )
  }
}

export default CreateTicket;