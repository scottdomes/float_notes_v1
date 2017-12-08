import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { NoteView, NoteListView, LoginView, FolderView } from './containers';
import { fetchNotes } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
        <a href="/">Float Notes</a>
        <Route exact path="/" component={NoteListView} />
        <Route
          path="/folders/:name/notes/:id"
          render={props => <NoteView {...props} />}
        />
        <Route
          exact
          path="/folders/:name"
          render={props => <FolderView {...props} />}
        />
        <Route path="/login" component={LoginView} />
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

export default connect(null, mapDispatchToProps)(App);
