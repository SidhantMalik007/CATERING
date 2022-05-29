import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Checkout({ c ,click,checkout}) {
  const data = c.map((item) => (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.desc}</Card.Text>
        <Button variant="primary" onClick={() => {click(item);
        document.getElementById(item.name).disabled=false
        }}>
          Remove from Cart
        </Button>
      </Card.Body>
    </Card>
  ));
  return (
    <>
      <h1 className="display-5">CHECKOUT</h1>
      <Container className="d-flex flex-wrap">{data}</Container>
      <div className="d-flex justify-content-center mt-4">
        {data.length != 0 ? <Button onClick={()=>{
          checkout("final")
        }}>PROCEED TO CHECKOUT</Button> : <></>}
      </div>
    </>
  );
}
