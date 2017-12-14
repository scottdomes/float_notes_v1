import React, { Component } from 'react';
// import { object } from 'prop-types'
import { Link } from 'react-router-dom';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from 'reactstrap';
import snakeCase from 'lodash.snakecase';
import { withRouter } from 'react-router';
import { scrollTo } from '../resources/utils';

class Note extends Component {
  // static propTypes = {
  //   collab: object.isRequired,
  // }

  goToNoteView = () => {
    const { note, history, currentFolder } = this.props;
    const { text, source_work, source_author } = note;
    history.push(`/folders/${currentFolder || snakeCase(source_work)}/notes/${note.id}`);
    scrollTo();
  };

  render() {
    const { note } = this.props;
    const { text, source_work, source_author } = note;
    return (
      <Col xs="12" sm="4" onClick={this.goToNoteView}>
        <Card className="Note">
          <CardBody>
            <CardText className="note-card-text">
              {text}
              <span className="text-overflow-preventer" />
            </CardText>
            <Link to={`/folders/${snakeCase(source_work)}`}>
              <CardTitle>{source_work}</CardTitle>
            </Link>
            <Link to={`/folders/${snakeCase(source_author)}`}>
              <CardSubtitle>{source_author}</CardSubtitle>
            </Link>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withRouter(Note);
