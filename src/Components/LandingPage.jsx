import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardsLayout from "./CardsLayout";
import Curriculum from "./Curriculum";
import Catch from "./Catch";
import Included from "./Included";
import Arrow1 from "../assets/Arrow1.svg";
import Arrow2 from "../assets/Arrow2.svg";
const LandingPage = () => {
  const style = {
    width: "100%",
    height: "40vh",
    fontFamily: "Montserrat",
  };
  const CardsStyle = {
    fontFamily: "Montserrat",
    height: "10vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <Container fluid>
        <Row>
          <Col xs={8}>
            <h1>
              Your Gateway to <br />
              Product Industry
            </h1>
          </Col>
          <Col>
            <img
              src={Arrow1}
              alt="Arrow"
              style={{
                width: "30rem",
                display: "block",
                position: "absolute",
                right: "360px",
                top: "80px",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <img
              src={Arrow2}
              alt="Arrow"
              style={{
                width: "20rem",
                display: "block",
                position: "absolute",
                right: "360px",
                top: "340px",
              }}
            />
          </Col>
          <Col>
            <Card style={{ width: "17rem", marginLeft: "5px" }}>
              <Card.Body>
                A new kind of internet
                <br />
                University - one that is
                <br />
                focused on helping you build
                <br />
                a network, learn new skills
                <br />
                and build the right mindset
              </Card.Body>
              <ListGroup>
                <ListGroup.Item
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Deep Down Into Courses
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "15rem" }}>
          <Col></Col>
          <Col>
            <h5>In 12 Weeks</h5>
          </Col>
          <Col></Col>
        </Row>
        <Row style={CardsStyle}>
          <Col>
            <h2>Here's What You'll Learn And Become!</h2>
          </Col>
        </Row>
        <div
          className="cards"
          style={{ height: "40vh", width: "100%", marginTop: "3rem" }}
        >
          <Container>
            <CardsLayout />
          </Container>
        </div>
        <div
          className="curriculum"
          style={{
            height: "50vh",
            width: "100%",
            marginTop: "13rem",
            display: "flex",
          }}
        >
          <Container>
            <Curriculum />
          </Container>
        </div>
        <div
          className="catch"
          style={{
            height: "50vh",
            width: "100%",
            marginTop: "45rem",
            display: "flex",
          }}
        >
          <Container>
            <Catch />
          </Container>
        </div>
        <div
          className="catch"
          style={{
            height: "50vh",
            width: "100%",
            marginTop: "25rem",
            display: "flex",
          }}
        >
          <Container>
            <Included />
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
