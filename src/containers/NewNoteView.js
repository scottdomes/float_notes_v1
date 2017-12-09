import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class NewNoteView extends Component {
  render() {
    // const {

    // } = this.props
    return (
      <div className="container NewNoteView">
        <Form>
          <FormGroup>
            <Label for="text">Note Text</Label>
            <Input type="textarea" name="text" id="text" placeholder="NoteText" />
          </FormGroup>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input name="author" id="author" placeholder="Author" />
          </FormGroup>
          <FormGroup>
            <Label for="work">Work</Label>
            <Input name="work" id="work" placeholder="Work" />
          </FormGroup>
          <FormGroup>
            <Label for="label">Labels</Label>
            <Input name="label" id="label" placeholder="Labels" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
