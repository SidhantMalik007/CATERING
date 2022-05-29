import React from 'react'
import {Card,Button, Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Starter({click}) {
     const data = [
       {
         name: "chicken nuggets1",
         desc: "fried chicken",
       },
       {
         name: "chicken nuggets2",
         desc: "fried chicken",
       },
       {
         name: "chicken nuggets3",
         desc: "fried chicken",
       },
       {
         name: "chicken nuggets4",
         desc: "fried chicken",
       },
       {
         name: "chicken nuggets5",
         desc: "fried chicken",
       },
       {
         name: "chicken nuggets6",
         desc: "fried chicken",
       },
       
     ];
     const c = data.map((item) => (
       <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src="" />
         <Card.Body>
           <Card.Title>{item.name}</Card.Title>
           <Card.Text>{item.desc}</Card.Text>
           <Button id={item.name} variant="primary" onClick={(e)=>{
             click(item);
           }}>Add To Cart</Button>
         </Card.Body>
       </Card>
     ));
  return (
    <>
    <h1 className='display-5'>Starter</h1>
      <Container className="d-flex flex-wrap">{c}</Container>
    </>
  );
}
