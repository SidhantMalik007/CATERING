import React from 'react'
import { Container } from 'react-bootstrap'
import Dessert from './Dessert';
import Maincourse from './Maincourse';
import Starter from './Starter'

export default function Menu({cartItem}) {
  return (
    <Container>
      <Starter click={(item) => cartItem(item)} />
      <Maincourse click={(item) => cartItem(item)} />
      <Dessert click={(item) => cartItem(item)} />
    </Container>
  );
}
