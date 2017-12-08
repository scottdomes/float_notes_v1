import React, { Component } from 'react';
// import { object } from 'prop-types'
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Folder extends Component {
  // static propTypes = {
  //   collab: object.isRequired,
  // }

  render() {
    const { title } = this.props
    return (
      <Card className="Folder">
        <CardBody>
          <CardText>
            <div className="background-circle">
              <i className="fas fa-folder"></i>
            </div>
          </CardText>
          <CardTitle>{title}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}
