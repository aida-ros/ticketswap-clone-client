import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const COMMENT_ADDED = 'COMMENT_ADDED'
const commentAdded = comment => ({
  type: COMMENT_ADDED,
  payload: comment
})

export const addComment = (contents) => dispatch => {
  console.log('COMMENT RECEIVED:', contents.comment)
  request
    .post(`${baseUrl}/comments`)
    .send(contents)
    .then(response => {
      console.log('COMMENT RESPONSE.BODY:', response.body)
      dispatch(commentAdded(contents.comment))
      console.log('DISPATCHED COMMENT:', contents.comment)
    })
}

export const COMMENTS_FETCHED = 'COMMENTS_FETCHED'
const commentsFetched = comments => ({
  type: COMMENTS_FETCHED,
  payload: comments
})

export const getComments = (id) => (dispatch) => {
  request(`${baseUrl}/comments/${id}`)
    .then(response => {
      const comments = response.body.comments
      dispatch(commentsFetched(comments))
    })
    .catch(console.error)
}