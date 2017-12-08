import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';

import { fetchNotes } from '../actions';
import Note from './Note';
import Folder from './Folder';

class FolderView extends Component {
  // static propTypes = {
  //   collab: object.isRequired,
  // }

  componentDidMount() {
    this.props.fetchNotes();
  }

  findNotes = () => {
    const { notes, match } = this.props;
    const matchingKey = Object.keys(notes).find(key => key === match.params.name);
    const branch = notes[matchingKey]
    return branch ? branch.notes : [];
  };

  render() {
    const { isLoading, notes, match } = this.props;
    return (
      <div>
        <h1>FolderView</h1>
        {isLoading && <p>Loading</p>}
        <Container>
          <Row>
            {this.findNotes().map(note => {
              return (
                <Col key={note.id} xs="12" sm="4">
                  <a href={`/notes/${note.id}`}>
                    <Note note={note} />
                  </a>
                </Col>
              );
            })}
          </Row>
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(FolderView);
