import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Catch = () => {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "center" }}>
        <h3>CATCH</h3>
      </header>
      <div className="headerText">
        <h1>
          One week In-house sponsored <br /> design camp in mountains
        </h1>
      </div>
      <div className="catchCards">
        <Container>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "4rem",
            }}
          >
            <Col>
              <Card
                border="dark"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1px",
                  width: "10rem",
                  height: "10rem",
                  marginTop: "3rem",
                }}
              ></Card>
            </Col>
            <Col>
              <Card
                border="dark"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1px",
                  width: "10rem",
                  height: "10rem",
                  marginTop: "3rem",
                }}
              ></Card>
            </Col>
            <Col>
              <Card
                border="dark"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1px",
                  width: "10rem",
                  height: "10rem",
                  marginTop: "3rem",
                }}
              ></Card>
            </Col>
            <Col>
              <Card
                border="dark"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1px",
                  width: "10rem",
                  height: "10rem",
                  marginTop: "3rem",
                }}
              ></Card>
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
                border="dark"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1px",
                  width: "10rem",
                  height: "10rem",
                  marginTop: "3rem",
                }}
              ></Card>
            </Col>
            <Col>
              <Card
                border="dark"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1px",
                  width: "10rem",
                  height: "10rem",
                  marginTop: "3rem",
                }}
              ></Card>
            </Col>
            <Col>
              <Card
                border="dark"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1px",
                  width: "10rem",
                  height: "10rem",
                  marginTop: "3rem",
                }}
              ></Card>
            </Col>
            <Col>
              <Card
                border="dark"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "1px",
                  width: "10rem",
                  height: "10rem",
                  marginTop: "3rem",
                }}
              ></Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Catch;
