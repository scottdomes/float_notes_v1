import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import Note from './Note';
import Folder from './Folder';

class NoteListView extends Component {
  render() {
    const { isLoading, notes } = this.props;
    console.log(notes);
    return (
      <div>
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
                    <Note note={branch.notes[0]} />
                  </Col>
                );
              }
              return (
                <Col key={key} xs="12" sm="4">
                  <Link to={`/folders/${key}`}>
                    <Folder title={branch.name} type={branch.type}/>
                  </Link>
                </Col>
              );
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

export default connect(mapStateToProps, null)(NoteListView);
