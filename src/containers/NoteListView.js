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
    return (
      <div>
        <h1>NoteListView</h1>
        {isLoading && <p>Loading</p>}
        {notes.map(note => {
          return <div key={note.id}>{note.id}</div>;
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
