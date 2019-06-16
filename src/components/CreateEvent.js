import React from 'react';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

class CreateEvent extends React.Component {
  render() {
    const onChange = this.props.onChange
    const onSubmit = this.props.onSubmit

    return (
      <main align='center'>
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
            
            {/* <label>
              <input 
                onChange={onChange}
                type="text" 
                placeholder="Event name" 
                name="name" />
            </label> */}
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

            {/* <label>
              <input 
                onChange={onChange}
                type="url"
                placeholder="http://www.example-url.com'" 
                name="image" />
            </label> */}
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

            {/* <label>
              <input 
                onChange={onChange} 
                type="text" 
                placeholder="Description" 
                name="description" />
            </label> */}
            <br />
            Start date <br/>
            <TextField
                id="outlined-name"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                type="date"
                name="start"
              />

            {/* <label>Start date <br />
              <input 
                onChange={onChange} 
                type="date" 
                min="2019-06-12" 
                name="start" />
            </label> */}
            <br />

            End date <br/>
            <TextField
                id="outlined-name"
                margin="normal"
                variant="outlined"
                onChange={onChange}
                type="date"
                name="end"
              />

            {/* <label>End date <br />
              <input 
                onChange={onChange} 
                type="date" 
                name="end" />
            </label> */}
            <br />
            <input type="submit" value="Submit" />
          </form>
          <br />
          <a href="/events">Back to events list</a>

        </div>

      </main>
    )
  }
}

export default CreateEvent;