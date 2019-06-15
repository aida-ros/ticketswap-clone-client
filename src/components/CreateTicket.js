import React from 'react';

class CreateTicket extends React.Component {
  render() {
    const onChange = this.props.onChange
    const onSubmit = this.props.onSubmit

    return (
      <main>
        <h1>Create new ticket</h1>
        <div>
          <form onSubmit={onSubmit}>
      
      
      <select>Pick an event
        <option></option>
      </select>

            <label>
              <input 
                onChange={onChange}
                type="text" 
                placeholder="Price" 
                name="price" />
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
            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>

      </main>
    )
  }
}

export default CreateTicket;