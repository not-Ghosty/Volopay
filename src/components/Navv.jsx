import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Navv = () => {
  const [inp, setInp] = useState("");

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Volopay Assessment</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/">All</Link>
              </Nav.Link>
              <Nav.Link to="">Yours</Nav.Link>

              <Nav.Link href="#">Blocked</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-5"
                aria-label="Search"
                onChange={(e) => {
                  setInp(e.target.value);
                }}
              />
              <Button
                variant="outline-success"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navv;
