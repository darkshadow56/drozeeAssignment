import React from "react";
import Card from "react-bootstrap/Card";
import block from "../assets/block.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Included = () => {
  return (
    <div
      style={{ backgroundColor: "black", width: "100%", paddingBottom: "1rem" }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          paddingTop: "1rem",
        }}
      >
        <h3>WHAT’S INCLUDED</h3>
      </header>
      <div className="headerText" style={{ color: "white" }}>
        <h1>An immersive and interactive learning experience</h1>
      </div>
      <div className="curriculumLengthCards">
        <Container fluid>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "4rem",
            }}
          >
            <Col>
              <Card
                bg="black"
                text="white"
                style={{ width: "19 rem", marginTop: "3rem" }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    width: "2rem",
                    marginLeft: "1rem",
                    borderRadius: "1px",
                  }}
                  src={block}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "left" }}>
                    Product Design
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                bg="black"
                text="white"
                style={{ width: "19rem", marginTop: "3rem" }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    width: "2rem",
                    marginLeft: "1rem",
                    borderRadius: "1px",
                  }}
                  src={block}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "left" }}>
                    Product Design
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                bg="black"
                text="white"
                style={{ width: "19rem", marginTop: "3rem" }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    width: "2rem",
                    marginLeft: "1rem",
                    borderRadius: "1px",
                  }}
                  src={block}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "left" }}>
                    Product Design
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "4rem",
            }}
          >
            <Col>
              <Card
                bg="black"
                text="white"
                style={{ width: "19rem", marginTop: "3rem" }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    width: "2rem",
                    marginLeft: "1rem",
                    borderRadius: "1px",
                  }}
                  src={block}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "left" }}>
                    Product Design
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                bg="black"
                text="white"
                style={{ width: "19rem", marginTop: "3rem" }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    width: "2rem",
                    marginLeft: "1rem",
                    borderRadius: "1px",
                  }}
                  src={block}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "left" }}>
                    Product Design
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                bg="black"
                text="white"
                style={{ width: "19rem", marginTop: "3rem" }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    width: "2rem",
                    marginLeft: "1rem",
                    borderRadius: "1px",
                  }}
                  src={block}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "left" }}>
                    Product Design
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Included;
