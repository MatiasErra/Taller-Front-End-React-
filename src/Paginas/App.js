import React, { Component, Fragment } from "react";
import '../css/App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch} from "react-router-dom";
import Home from "./Home";
import Sitios from "./Sitio";
import Usuarios from "./Usuarios";
import Login from "./Login";
import Reviews from "./Reviews";
import Registro from "./Registro";
import UpSitios from "./UpSitios";
import SitioxUsU from "./SitioXUsU";
import UpReviews from "./UpReviews";
import Intin from "./Intine";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {Form, Container, FormControl,Button } from "react-bootstrap";
import Cookies from 'universal-cookie';

const cookies = new Cookies()
function App(){
  const CerrarSesion=()=>{
    cookies.remove('id',{path:'/'});
    cookies.remove('user',{path:'/'});
    window.location.href='/';
  }

const componentDidmount=()=>
  {
    if(!cookies.get("user")){
      window.location.href="/";
    }
  }
    return(

    <Router>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '80px' }}
        navbarScroll
      >
          <Nav.Link as={Link} to ={"/home"}>Home</Nav.Link>

      
      </Nav>
      <Form className="d-flex">
        
        <Button size="sm" onClick={CerrarSesion} variant="primary">Cerrar sesion</Button>
        <Button as={Link} to ={"/usuario/" +cookies.get("id")} Home size="sm" variant="primary">{cookies.get("user")}</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/sitios/:id/:name" element={<SitioxUsU />}/>
        <Route path="/usuario/:id" element={<Usuarios />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/sitio/:id" element={<Sitios />}/>
        <Route path="/inti/:id/:name" element={<Intin />}/>
        <Route path="/registro" element={<Registro />}/>
        <Route path="/reviews/:id/:name" element={<Reviews />}/>
        <Route path="/Upreviews/:id/:name" element={<UpReviews />}/>
        <Route path="/UpSitios" element={<UpSitios />}/>
      </Routes>
      
      
  
    </Router>
 

);
}
export default App;