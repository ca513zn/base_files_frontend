import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const MyNavBar = (props) => {
  let { loggedIn, user } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/games">
                Games
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar direction="right">
              <DropdownToggle nav caret>
                Lessons
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink tag={Link} to="/lessons/create">
                    Create
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={Link} to="/lessons/manage">
                    Manage
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.Auth.loggedIn,
    user: state.Auth.user,
  };
};

export default connect(mapStateToProps)(MyNavBar);
