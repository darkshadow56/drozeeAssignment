import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import rectangleImg from "../assets/Rectangle.png";

const CardsLayout = () => {
  const cardLayoutStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={cardLayoutStyle}>
      <Card
        bg="dark"
        border="dark"
        text="white"
        style={{ width: "17.5rem", textAlign: "left" }}
      >
        <Card.Img variant="top" src={rectangleImg} />
        <Card.Body>
          <Card.Title>Product Design</Card.Title>
          <Card.Text className="mb4 mt4">
            You'll learn from the best in
            <thead> design industry; Join Dan Mall</thead>
            <thread> and the former hiring</thread>
            <thread>
              {" "}
              manager at google, for live and interactive session
            </thread>
          </Card.Text>
          <Button
            style={{ borderRadius: "1px", marginLeft: "10rem" }}
            variant="outline-light"
          >
            Insight
          </Button>
        </Card.Body>
      </Card>

      <Card
        variant="light"
        border="dark"
        style={{ width: "17.5rem", textAlign: "left" }}
      >
        <Card.Img variant="top" src={rectangleImg} />
        <Card.Body>
          <Card.Title>Product Design</Card.Title>
          <Card.Text className="mb4 mt4">
            You'll learn from the best in
            <thead> design industry; Join Dan Mall</thead>
            <thread> and the former hiring</thread>
            <thread>
              {" "}
              manager at google, for live and interactive session
            </thread>
          </Card.Text>
          <Button
            style={{ borderRadius: "1px", marginLeft: "10rem" }}
            variant="outline-dark"
          >
            Insight
          </Button>
        </Card.Body>
      </Card>

      <Card
        variant="light"
        border="dark"
        style={{ width: "17.5rem", textAlign: "left" }}
      >
        <Card.Img variant="top" src={rectangleImg} />
        <Card.Body>
          <Card.Title>Product Design</Card.Title>
          <Card.Text className="mb4 mt4">
            You'll learn from the best in
            <thead> design industry; Join Dan Mall</thead>
            <thread> and the former hiring</thread>
            <thread>
              {" "}
              manager at google, for live and interactive session
            </thread>
          </Card.Text>
          <Button
            style={{ borderRadius: "1px", marginLeft: "10rem" }}
            variant="outline-dark"
          >
            Insight
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsLayout;
