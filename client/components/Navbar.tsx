import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid w-auto">
        <NavLink className="navbar-brand text-warning ms-5 rounded-2" to="#"><i className="fa-solid fa-medal"></i></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active text-light" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                <div className="text-center">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton/>
                  </SignedIn>
                </div>
                </li>
                <li><NavLink className="dropdown-item text-light" to="/Pages/Dashboard">Dashboard</NavLink></li>
                <li><NavLink className="dropdown-item text-light" to="/components/Profiles">Profile</NavLink></li>
                <li><NavLink className="dropdown-item text-light" to="/Pages/About">About</NavLink></li>
                <li><NavLink className="dropdown-item text-light" to="/Pages/Services">Services</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search..."
              className=" placeholder-glow" />
          </Col>
          <Col xs="auto">
            <Button variant="outline-success" className="me-5">Search <i className="fa-brands fa-searchengin"></i></Button>
          </Col>
        </Row>
      </Form>
    </nav>
  );
};

export default NavBar;