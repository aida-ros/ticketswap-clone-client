import React from "react";
import '../main.css'

class CommentForm extends React.Component {
  render() {
    const onChange = this.props.onChange
    const onSubmit = this.props.onSubmit

    return (
      <main className='commentbox'>
        <div>
          <form onSubmit={onSubmit}>
            <br />

            <label>
          <input
                type="text"
                name="comment"
                onChange={onChange}
              />
            </label>
            <br />

            <button type="submit">Add</button>
          </form>
        </div>
      </main>
    );
  }
}

export default CommentForm;