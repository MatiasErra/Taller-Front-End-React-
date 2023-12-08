import React, {useEffect, useState,  Component} from "react";
import axios from "axios";
import "../css/estilo.css";
import "../css/Centro.css"
import {Card, ListGroup, ListGroupItem, Row, Col, Container, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'universal-cookie';

const baseUrl='http://localhost:777/sites'

const cookies = new Cookies()
console.log( cookies.get("id"));
console.log( cookies.get("user"));


const Home = () => {
  const [sitios, setSitios]= useState([]);
  const [TablaSitios, setTablaSitios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
 
  const peticionGet=async()=>{
      await axios.get('http://localhost:777/sites')
      .then(response=>{
         setSitios(response.data);
         setTablaSitios(response.data);
      }).catch(error=>{
          console.log(error)
      })
 
  }
 
  const handleChange=e=>{
      setBusqueda(e.target.value);
      filtrar(e.target.value)
  }
 const filtrar=(terminoBusqueda)=>{
     var resultadosBusqueda=TablaSitios.filter((elemento)=>{
         if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
         ||elemento.type.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
         ||elemento.city.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
         ||elemento.description.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
 )
         {
             return elemento;
         }
         })
         setSitios(resultadosBusqueda)
 }
  useEffect(()=>{
      peticionGet();
  },[])


return(
  <><h1>Sitios</h1><div className="App">
    <div className="containerInput">
      <input
        className="inputBuscar"
        value={busqueda}
        placeholder="Busqueda un sitio"
        onChange={handleChange} />
      <button className="btn btn-succes">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  </div>
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
   <div className="text-center">
   <Button variant="primary" as={Link} to ={"/UpSitios"}>Agregar Sitio</Button>
   </div>
  </>
)
}

 
  
 



  
export default Home;

