import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const HomeButtons = () => {
  const style = {
    display: "flex",
    float: "end",
    alignItems: "center",
    justifyContent: "center",
    height: "10vh",
    width: "100%",
  };
  const buttonStyle = {
    borderRadius: "1px",
    margin: "2px",
  };

  return (
    <div style={style}>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <Button variant="dark" size="sm" style={buttonStyle}>
              Log In
            </Button>
            <Button variant="outline-dark" size="sm" style={buttonStyle}>
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HomeButtons;
