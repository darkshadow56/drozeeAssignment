import React from "react";
import Card from "react-bootstrap/Card";
import frame from "../assets/Frame.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";
import frame4 from "../assets/Frame4.png";
import frameText from "../assets/FrameText.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Curriculum = () => {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "start" }}>
        <h3>CURRICULUM</h3>
      </header>
      <div className="headerText">
        <h1>
          Learn-by-doing with our extensive <br /> 12-week product design course
        </h1>
      </div>
      <div
        className="cards"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Card border="light" style={{ width: "15rem", marginTop: "3rem" }}>
          <Card.Img variant="top" style={{ width: "3rem" }} src={frame} />
          <Card.Body>
            <Card.Title>Start Your Course</Card.Title>
            <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
              Introduce yourself in the <br /> student Slack, meet your <br />{" "}
              mentor, and get set-up by <br /> reviewing course material.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light" style={{ width: "15rem", marginTop: "3rem" }}>
          <Card.Img variant="top" style={{ width: "3rem" }} src={frame2} />
          <Card.Body>
            <Card.Title>Start Your Course</Card.Title>
            <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
              Introduce yourself in the <br /> student Slack, meet your <br />{" "}
              mentor, and get set-up by <br /> reviewing course material.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light" style={{ width: "15rem", marginTop: "3rem" }}>
          <Card.Img variant="top" style={{ width: "3rem" }} src={frame3} />
          <Card.Body>
            <Card.Title>Start Your Course</Card.Title>
            <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
              Introduce yourself in the <br /> student Slack, meet your <br />{" "}
              mentor, and get set-up by <br /> reviewing course material.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light" style={{ width: "15rem", marginTop: "3rem" }}>
          <Card.Img variant="top" style={{ width: "3rem" }} src={frame4} />
          <Card.Body>
            <Card.Title>Start Your Course</Card.Title>
            <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
              Introduce yourself in the <br /> student Slack, meet your <br />{" "}
              mentor, and get set-up by <br /> reviewing course material.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="curriculumLengthCards">
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
                style={{ width: "19 rem", marginTop: "3rem" }}
              >
                <Card.Img
                  variant="top"
                  style={{ width: "3rem" }}
                  src={frameText}
                />
                <Card.Body>
                  <Card.Title>Start Your Course</Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: "19rem", marginTop: "3rem" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "3rem" }}
                  src={frameText}
                />
                <Card.Body>
                  <Card.Title>Start Your Course</Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: "19rem", marginTop: "3rem" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "3rem" }}
                  src={frameText}
                />
                <Card.Body>
                  <Card.Title>Start Your Course</Card.Title>
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
              <Card border="dark" style={{ width: "19rem", marginTop: "3rem" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "3rem" }}
                  src={frameText}
                />
                <Card.Body>
                  <Card.Title>Start Your Course</Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: "19rem", marginTop: "3rem" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "3rem" }}
                  src={frameText}
                />
                <Card.Body>
                  <Card.Title>Start Your Course</Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: "19rem", marginTop: "3rem" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "3rem" }}
                  src={frameText}
                />
                <Card.Body>
                  <Card.Title>Start Your Course</Card.Title>
                  <Card.Text style={{ textAlign: "left", margin: "3px 1px" }}>
                    Introduce yourself in the <br /> student Slack, meet your{" "}
                    <br /> mentor, and get set-up by <br /> reviewing course
                    material.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "black 1px solid",
                backgroundColor: "black",
                borderRadius: "1px",
                margin: "1.2rem",
                height: "2.8rem",
                color: "white",
              }}
            >
              Expand All
            </h4>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Curriculum;
