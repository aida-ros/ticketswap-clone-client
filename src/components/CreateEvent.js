import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class CreateEvent extends React.Component {
  render() {
    const onChange = this.props.onChange
    const onSubmit = this.props.onSubmit

    return (
      <main>
        <h1>Create new event</h1>
        <div>
          <form onSubmit={onSubmit}>
            <label>
              <input 
                onChange={onChange}
                type="text" 
                placeholder="Event name" 
                name="name" />
            </label>
            <br />

            <label>
              <input 
                onChange={onChange}
                type="url"
                placeholder="http://www.example-url.com'" 
                name="image" />
            </label>
            <br />

            <label>
              <input 
                onChange={onChange} 
                type="text" 
                placeholder="Description" 
                name="description" />
            </label>
            <br />

            <label>Start date <br />
              <input 
                onChange={onChange} 
                type="date" 
                min="2019-06-12" 
                name="start" />
            </label>
            <br />

            <label>End date <br />
              <input 
                onChange={onChange} 
                type="date" 
                name="end" />
            </label>
            <br />

            <input type="submit" value="Submit" />
          </form>
          
          <a href="/events">Back to events list</a>

        </div>

      </main>
    )
  }
}

export default CreateEvent;