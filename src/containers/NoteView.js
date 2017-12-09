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
      <div>
        <div className="NoteView container">
          <div className="inner">
            <p>{note.text}</p>
            <p className="source-work">{note.source_work}</p>
            <p className="source-author">{note.source_author}</p>
          </div>
        </div>
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
