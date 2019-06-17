import React from 'react';
import '../main.css'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

class CreateEvent extends React.Component {
  render() {
    const onChange = this.props.onChange
    const onSubmit = this.props.onSubmit

    return (
      <Grid>
        <main className='form' align='center'>
          <Typography variant="h3">
            Create new event
        </Typography>
          <div>
            <form onSubmit={onSubmit}>

              <TextField
                id="outlined-name"
                label="Event name"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                type="text"
                name="name"
              />
              <br />

              <TextField
                id="outlined-name"
                label="Add image 'http://...'"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                type="url"
                name="image"
              />
              <br />

              <TextField
                id="outlined-name"
                label="Description"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                type="text"
                name="description"
              />
              <br />

              Start date <br />
              <TextField
                id="outlined-name"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                type="date"
                name="start"
              />
              <br />

              End date <br />
              <TextField
                id="outlined-name"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                type="date"
                name="end"
              />
              <br />

              <input type="submit" value="Submit" />

            </form>
            <br />
            <Link to={`/events`}>Go back to events list</Link>

          </div>

        </main>
      </Grid>
    )
  }
}

export default CreateEvent;