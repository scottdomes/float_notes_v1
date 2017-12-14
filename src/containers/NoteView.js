import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class NoteView extends Component {
  // static propTypes = {
  //   collab: object.isRequired,
  // }
  index = null;
  boundListener = this.handleKeyDown.bind(this);

  componentDidMount() {
    this.keydownListener = window.addEventListener(
      'keydown',
      this.boundListener
    );
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.boundListener);
  }

  handleKeyDown(e) {
    const { notes, match, history } = this.props;
    const branch = notes[match.params.name];
    if (branch) {
      if (e.key === 'ArrowRight') {
        if (branch.notes[this.index + 1]) {
          history.push(
            `/folders/${match.params.name}/notes/${branch.notes[this.index + 1]
              .id}`
          );
        } else {
          history.push(
            `/folders/${match.params.name}/notes/${branch.notes[0].id}`
          );
        }
      } else if (e.key === 'ArrowLeft') {
        if (branch.notes[this.index - 1]) {
          history.push(
            `/folders/${match.params.name}/notes/${branch.notes[this.index - 1]
              .id}`
          );
        } else {
          history.push(
            `/folders/${match.params.name}/notes/${branch.notes[branch.notes.length - 1].id}`
          );
        }
      }
    }
  }

  findNote = () => {
    const { notes, match } = this.props;
    const branch = notes[match.params.name];
    if (branch) {
      this.index = branch.notes.findIndex(note => note.id == match.params.id);
      return branch.notes[this.index];
    } else {
      return {};
    }
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

export default withRouter(connect(mapStateToProps, null)(NoteView));
