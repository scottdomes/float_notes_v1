import React, { Component } from 'react';
// import { object } from 'prop-types'
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Note extends Component {
  // static propTypes = {
  //   collab: object.isRequired,
  // }

  render() {
    const { note } = this.props
    const {
      text,
      source_work,
      source_author
    } = note
    return (
      <Card>
        <CardBody>
          <CardText>
            {text}
          </CardText>
          <CardTitle>{source_work}</CardTitle>
          <CardSubtitle>{source_author}</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}
