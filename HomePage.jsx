import React from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <Container className="homepage-container text-center">
      <Image
        src="/assets/welcome-image.jpg"
        alt="Welcome"
        className="img-fluid mb-4"
      />
      <h1 className="welcome-text">Welcome to Our Store</h1>
      <Button variant="primary" size="lg" className="shop-now-button shadow">
        Shop Now
      </Button>
      <Card className="mt-4" border="secondary">
        <Card.Body>
          <Card.Title>Featured Products</Card.Title>
          <Card.Text>
            Discover our latest collection and special promotions.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HomePage;