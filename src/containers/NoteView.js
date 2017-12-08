import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteView extends Component {
  // static propTypes = {
  //   collab: object.isRequired,
  // }

  findNote = () => {
    const { notes, match } = this.props;
    const branch = notes[match.params.name];
    return branch ? branch.notes.find(note => note.id == match.params.id) : {};
  };

  render() {
    const note = this.findNote();
    return (
      <div className="NoteView">
        <h1>{note.source_work}</h1>
        <h2>{note.source_author}</h2>
        <p>{note.text}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    notes: state.notes.notes,
    isLoading: state.notes.isLoading
  };
};

export default connect(mapStateToProps, null)(NoteView);
