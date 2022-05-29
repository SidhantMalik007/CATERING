import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Dessert({ click }) {
  const data = [
    {
      name: "Dessert Item1",
      desc: "fried chicken",
    },
    {
      name: "Dessert Item2",
      desc: "fried chicken",
    },
    {
      name: "Dessert Item3",
      desc: "fried chicken",
    },
    {
      name: "Dessert Item4",
      desc: "fried chicken",
    },
    {
      name: "Dessert Item5",
      desc: "fried chicken",
    },
    {
      name: "Dessert Item6",
      desc: "fried chicken",
    },
  ];
  const c = data.map((item) => (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.desc}</Card.Text>
        <Button variant="primary" onClick={(e) => click(item)}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  ));
  return (
    <>
      <h1 className="display-5">Dessert</h1>
      <Container className="d-flex flex-wrap">{c}</Container>
    </>
  );
}
