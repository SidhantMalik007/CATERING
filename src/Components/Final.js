import React, { useRef } from 'react'
import { Form,Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Final({items}) {
    const nameRef=useRef()
    const phRef=useRef()
    const addRef=useRef()
    function handleClick(){
        const phno=phRef.current.value;
        const name=nameRef.current.value;
        const add=addRef.current.value;
        if(phno.length!=10)
        alert("INVALID PHONE NUMBER(PHNO LENGTH SHOULD BE 10)")
        else if(name.length<1)
        alert("PLEASE ENTER NAME")
        else if (add.length < 1) alert("PLEASE ENTER ADDRESS");
        else{
            fetch("http://localhost:6900/det", {
              method: "POST",
              body: JSON.stringify({
                name: name,
                address: add,
                phoneNo: phno,
                data: items,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(res=>res.json()).then(
                (data)=>{
                    console.log(data)
                }
            ).catch((err)=>console.log(err));

        }
    
    }
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
          <Form.Text className="text-muted" required>
            We'll never share your details with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            ref={addRef}
            type="text"
            placeholder="address"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            ref={phRef}
            placeholder="number"
            type="number"
            minLength={10}
            maxLength={10}
            required
          />
        </Form.Group>
        <Button variant="primary"
        vali
         onClick={() => {
             handleClick()}}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
