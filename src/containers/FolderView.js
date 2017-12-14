import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';

import Note from './Note';
import Folder from './Folder';

class FolderView extends Component {
  // static propTypes = {
  //   collab: object.isRequired,
  // }

  findNotes = () => {
    const { notes, match } = this.props;
    const matchingKey = Object.keys(notes).find(
      key => key === match.params.name
    );
    const branch = notes[matchingKey];
    return branch ? branch.notes : [];
  };

  render() {
    const { isLoading, notes, match } = this.props;
    return (
      <div className="component-container">
        {isLoading && <p>Loading</p>}
        <Container>
          <Row>
            {this.findNotes().map(note => {
              return <Note currentFolder={match.params.name} key={note.id} note={note} />;
            })}
          </Row>
        </Container>
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

export default connect(mapStateToProps, null)(FolderView);
