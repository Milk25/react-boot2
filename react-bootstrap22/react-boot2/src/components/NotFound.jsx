import React from "react";
import { Container, Row, Col, Image, NavLink, Button } from "react-bootstrap";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <Container className="notfound-container text-center">
      <Row>
        <Col md={6} className="mx-auto">
          <Image
            src="/assets/404-image.jpg"
            alt="404 Error"
            className="img-fluid mb-4"
          />
          <h1 className="text-danger">404 - Not Found</h1>
          <p className="text-muted">
            Oops! The page you are looking for does not exist.
          </p>
          <NavLink href="/">
            <Button variant="primary">Go to Homepage</Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
