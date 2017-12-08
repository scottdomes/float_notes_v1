import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import logo from './logo.svg';
import './App.css';
import { NoteView, NoteListView, LoginView, FolderView } from './containers';
import { fetchNotes } from './actions';

console.log(CSSTransition)
class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="App">
            <a href="/">Float Notes</a>
            <Route exact path="/" component={NoteListView} />
            <CSSTransition
              className="fade"
              timeout={1000}>
              <Route
              location={location}
                path="/folders/:name/notes/:id"
                render={props => <NoteView {...props} />}
              />
            </CSSTransition>
            <Route
              exact
              path="/folders/:name"
              render={props => <FolderView {...props} />}
            />
            <Route path="/login" component={LoginView} />
          </div>
        )}
      />
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
