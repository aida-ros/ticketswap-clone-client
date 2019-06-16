import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../main.css'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

class CreateTicket extends React.Component {

  render() {
    const { onChange, onSubmit, events, handleChange } = this.props

    function eventsMenu(events) {
      if (!events) {
        return <p>Looking for active events...</p>
      }
      return events.map(event => <option value={event.id} key={event.id} name={event.id}>{event.name}</option>)
    }

    return (
      <Grid>
        <main className='form' align='center'>
          <Typography variant="h3">
            Create new ticket
          </Typography>
          <div>
            <form onSubmit={onSubmit}>



              <h5>Select an event</h5>
              <select
                name="eventName"
                onChange={handleChange}
                >
                {eventsMenu(events)}
              </select>
              <br />

              <h5>Set price</h5>
              <TextField
                id="outlined-name"
                label="Price"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                type="number"
                step="any"
                placeholder="Price"
                name="price"
              />

              <br />

              <h5>Submit an image (optional)</h5>
              <TextField
                id="outlined-name"
                label="Image URL"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                type="url"
                step="any"
                placeholder="Price"
                name="image"
              />

              <br />

              <h5>Add a description</h5>
              <TextField
                id="outlined-name"
                label="Description"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                type="text"
                step="any"
                placeholder="Description"
                name="description"
              />

              <br />

              <input type="submit" value="Submit" />
            </form>
          </div>
          <br />
          <a href="/events">Back to events list</a>
        </main>
      </Grid>
    )
  }
}

export default CreateTicket;