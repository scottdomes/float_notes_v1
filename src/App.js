import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { NoteView, NoteListView, LoginView, FolderView } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NoteListView} />
        <Route path="/notes/:id" render={props => <NoteView {...props} />} />
        <Route path="/folders/:name" render={props => <FolderView {...props} />} />
        <Route path="/login" component={LoginView} />
      </div>
    );
  }
}

export default App;
