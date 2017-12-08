import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';

import { fetchNotes } from '../actions';
import Note from './Note';
import Folder from './Folder';

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
        <Container>
          <Row>
            {Object.keys(notes).map(key => {
              const branch = notes[key];
              if (branch.length === 1 && branch.type === 'author') {
                return null;
              }
              if (branch.length === 1 && branch.type === 'work') {
                // return note
                return (
                  <Col key={key} xs="12" sm="4">
                    <a href={`/notes/${branch.notes[0].id}`}>
                      <Note note={branch.notes[0]} />
                    </a>
                  </Col>
                );
              }
              return (
                <Col key={key} xs="12" sm="4">
                  <a href={`/folders/${key}`}>
                    <Folder title={branch.name} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteListView);
