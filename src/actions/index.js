import snakeCase from 'lodash.snakecase';

const addToExistingFolder = (note, folder) => {
  folder.notes.push(note);
  folder.length++;
};

export const requestNotes = () => ({
  type: 'REQUEST_NOTES'
});

export const receiveNotes = json => ({
  type: 'RECEIVE_NOTES',
  payload: json.notes
});

export const organizeNotes = json => {
  const tree = {};
  json.notes.forEach(note => {
    // We avoid duplicate notes by not showing author folders with a length of one
    if (tree[snakeCase(note.source_author)]) {
      addToExistingFolder(note, tree[snakeCase(note.source_author)]);
    } else {
      tree[snakeCase(note.source_author)] = {
        notes: [note],
        length: 1,
        type: 'author',
        name: note.source_author
      };
    }
    if (tree[snakeCase(note.source_work)]) {
      addToExistingFolder(note, tree[snakeCase(note.source_work)]);
    } else {
      tree[snakeCase(note.source_work)] = {
        notes: [note],
        length: 1,
        type: 'work',
        name: note.source_work
      };
    }
  });
  return {
    type: 'ORGANIZE_NOTES',
    payload: tree
  };
};

export const fetchNotes = () => {
  return dispatch => {
    dispatch(requestNotes());

    return fetch('notes.json')
      .then(
        res => res.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(organizeNotes(json)));
  };
};
