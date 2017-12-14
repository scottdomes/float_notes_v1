import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class TopNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Navbar">
        <Navbar color="faded" light expand="md">
          <NavbarBrand tag={Link} to="/">
            <i className="fas fa-cloud" /> Float Notes
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/works">
                  <i className="fas fa-book" /> Works
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/authors">
                  <i className="fas fa-user" /> Authors
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/labels">
                  <i className="fas fa-bookmark" /> Labels
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
