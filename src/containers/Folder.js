import React, { Component } from 'react';
// import { object } from 'prop-types'
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Folder extends Component {
  // static propTypes = {
  //   collab: object.isRequired,
  // }

  render() {
    const { title, type } = this.props
    let icon = 'folder'
    if (type === 'work') {
      icon = 'book'
    } else if (type === 'label') {
      icon = 'bookmark'
    } else if (type === 'author') {
      icon = 'user'
    }
    return (
      <Card className="Folder">
        <CardBody>
          <CardText>
            <span className="background-circle">
              <i className={`fas fa-${icon}`}></i>
            </span>
          </CardText>
          <CardTitle>{title}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}
