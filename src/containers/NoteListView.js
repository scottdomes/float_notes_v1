import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import Note from './Note';
import Folder from './Folder';

class NoteListView extends Component {
  render() {
    const { isLoading, notes, match } = this.props;
    const { path } = match;
    return (
      <div className="component-container NoteListView">
        {isLoading && <p>Loading</p>}
        <Container>
          <Row>
            {Object.keys(notes).map(key => {
              const branch = notes[key];
              if (path === `/${branch.type}s` || path === '/') {
                if (
                  branch.length === 1 &&
                  branch.type === 'author' &&
                  path === '/'
                ) {
                  return null;
                }
                if (
                  branch.length === 1 &&
                  branch.type === 'work' &&
                  path === '/'
                ) {
                  // return note
                  return <Note key={key} note={branch.notes[0]} />;
                }
                return (
                  <Col key={key} xs="12" sm="4">
                    <Link to={`/folders/${key}`}>
                      <Folder title={branch.name} type={branch.type} />
                    </Link>
                  </Col>
                );
              } else {
                return null;
              }
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
