import React from "react";
import "../css/estilo.css";
import "../css/Centro.css"
import axios from "axios";
import {Card, ListGroup, ListGroupItem, Row, Col, Container, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
var sitios
var user
const baseUrl='http://localhost:777/sites'




const SitioxUsU = () => {
    let { id, name } = useParams();
    fetch('http://localhost:777/sites?userId='+id, {
        headers: {
            'Content-type': 'application/json'
            },
        method: 'GET'           
    })
    .then(response => response.json())
    .then(data => sitios = data)
 
  
return(
<><h1>Sitios creado por {name} </h1>
  {sitios && sitios.map((sitios)=>(
    <Col md={3}>
        <Card  key={sitios.id} border="primary" id="tarjeta" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={'data:image/png;base64,' + sitios.image} />
          <Card.Body>
            <Card.Title>{sitios.name}</Card.Title>
  
          </Card.Body>
          <ListGroup className="list-group-flush">
  
            <ListGroupItem>{sitios.city}</ListGroupItem>
            <ListGroupItem>{sitios.description}</ListGroupItem>
            <ListGroupItem>{sitios.type}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="primary" href={sitios.address}>Ubicacion</Button>
            <Button variant="primary" as={Link} to={"/sitio/" + sitios.id}>Ver detalles</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
    </>
)
}
export default SitioxUsU;