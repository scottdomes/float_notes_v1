import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

class NoteListView extends Component {
  // static propTypes = {
  //   collab: object.isRequired,
  // }

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { isLoading, notes } = this.props;
    console.log(notes);
    return (
      <div>
        <h1>NoteListView</h1>
        {isLoading && <p>Loading</p>}
        {Object.keys(notes).map(key => {
          const branch = notes[key];
          if (branch.length === 1 && branch.type === 'author') {
            return null;
          }
          return (
            <div key={key}>
              <h4>{branch.name}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => {
      dispatch(fetchNotes());
    }
  };
};

const mapStateToProps = (state, props) => {
  return {
    notes: state.notes.notes,
    isLoading: state.notes.isLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteListView);
