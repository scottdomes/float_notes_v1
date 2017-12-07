export const requestNotes = () => ({
  type: 'REQUEST_NOTES'
})

export const receiveNotes = (json) => ({
  type: 'RECEIVE_NOTES',
  payload: json.notes
})

export const fetchNotes = () => {
  return (dispatch) => {
    dispatch(requestNotes())

    return fetch('notes.json')
      .then(res => res.json(), error => console.log('An error occurred.', error))
      .then(json => dispatch(receiveNotes(json)))
  }
}