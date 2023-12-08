import React from "react";
import "../css/estilo.css";
import "../css/Centro.css"
import axios from "axios";
import {Card, ListGroup, ListGroupItem, Row, Col, Container, Button} from "react-bootstrap";
import { useParams } from "react-router";
var intin;
var sitios;
const baseUrl='http://localhost:777/sites'

const Usuarios = () => {
  let { id } = useParams();
  let tru = id-1
  fetch('http://localhost:777/itinerary?userId='+id, {
    headers: {
        'Content-type': 'application/json'
        },
    method: 'GET'           
})
.then(response => response.json())
.then(data => intin = data)






  return (
    <><h1>Intinerarios</h1>
    {intin && intin.map((intin)=>(
      <Col md={3}>
    <Card  key={intin.id} style={{ width: '18rem' }}>
    <Card.Body>
    
      <Card.Title>{intin.name}</Card.Title>
      <Card.Text>
    <h6> {intin.nameSite}</h6>
      </Card.Text>
      <Card.Text>
        {intin.description}
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
      ))}
      </>
  )
};

export default Usuarios;
