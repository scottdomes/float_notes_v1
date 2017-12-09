import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { spring, AnimatedSwitch } from 'react-router-transition';

import logo from './logo.svg';
import './App.css';
import { NoteView, NoteListView, LoginView, FolderView } from './containers';
import Navbar from './components/Navbar';
import { fetchNotes } from './actions';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateX(${styles.offset}px)`,
  };
}

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 19,
  });
}

const pageTransitions = {
  atEnter: {
    offset: 200,
    opacity: 1,
  },
  atLeave: {
    offset: -100,
    opacity: 0,
  },
  atActive: {
    offset: 0,
    opacity: 1,
  },
};

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <AnimatedSwitch
          {...pageTransitions}
        mapStyles={mapStyles}
          className="route-wrapper">
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
        </AnimatedSwitch>
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

export default withRouter(connect(null, mapDispatchToProps)(App));
