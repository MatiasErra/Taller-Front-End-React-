import React from "react";
import {Card, ListGroup, ListGroupItem, Row, Col, Container, Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import "../css/Centro.css";
import axios from "axios";
import { Link } from "react-router-dom";
var user
var sitios;
const baseUrl='http://localhost:777/users'

fetch('http://localhost:777/sites', {
    headers: {
        'Content-type': 'application/json'
        },
    method: 'GET'           
})
.then(response => response.json())
.then(data => sitios = data)
.then(response =>{console.log(sitios)})

fetch('http://localhost:777/users', {
    headers: {
        'Content-type': 'application/json'
        },
    method: 'GET'           
})
.then(response => response.json())
.then(data => user = data)
.then(response =>console.log(user))
const Sitios = () => {
   
    let { id } = useParams();
    let tru = id-1
   let uwu =  sitios[tru].userId-1
 console.log(id)
    return (
    <div className="text-center">
            <h1>{sitios[tru].name}</h1>
            <img className="imagen" src={'data:image/png;base64,' + sitios[tru].image}></img>
            <div className="color">
                <p>
                    {sitios[tru].type}
                </p>
                <p>
                    {sitios[tru].city}
                </p>
                <p>
                    {sitios[tru].description}
                </p>
                <p>
                <a>Sitio subido por </a><Link to={"/sitios/" + user[uwu].id + '/'+ user[uwu].user}>{user[uwu].user}</Link>
                </p>
            </div>
        
                <Button variant="primary" as={Link} to ={"/inti/" + sitios[tru].id +'/'+sitios[tru].name}>Agregar al intinerario</Button>
                <Button variant="primary" as={Link} to ={"/reviews/" + sitios[tru].id + '/' +sitios[tru].name}>Ver reviews</Button>
                <Button variant="primary" as={Link} to ={"/Upreviews/" + sitios[tru].id + '/' +sitios[tru].name}>Dejar una review</Button>
    </div>
     )  
}


export default Sitios