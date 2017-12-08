import React, { Component } from 'react';
// import { object } from 'prop-types'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import snakeCase from 'lodash.snakecase';

export default class Note extends Component {
  // static propTypes = {
  //   collab: object.isRequired,
  // }

  render() {
    const { note } = this.props;
    const { text, source_work, source_author } = note;
    return (
      <Card className="Note">
        <CardBody>
          <CardText className="note-card-text">
            {text}
            <div className="text-overflow-preventer" />
          </CardText>
          <a href={`/folders/${snakeCase(source_work)}`}>
            <CardTitle>{source_work}</CardTitle>
          </a>
          <a href={`/folders/${snakeCase(source_author)}`}>
            <CardSubtitle>{source_author}</CardSubtitle>
          </a>
        </CardBody>
      </Card>
    );
  }
}
