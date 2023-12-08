import React from "react";
import "../css/Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";

const baseUrl='http://localhost:777/users'
const cookies = new Cookies()

export function Registro(){
    const RegistrarUser=(e)=>{
        e.preventDefault();

        axios.get(baseUrl, {params: {user:e.target.username.value}})
        .then(response=>{
            if(response.data.length==0)
            {
        axios.post(baseUrl, {user:e.target.username.value, password:e.target.password.value})
        window.location.href="/";
            }else{
                alert("El usuario ya existe"); 
                
            }
       
    })
}

    return(
        <div className="containerPrincipal">
            <div className="containerSecundario">
                <div className="form-group">
                <form onSubmit={RegistrarUser}>
               <h2>Crear Cuenta</h2>
                <label>Usuario: </label>
                <br />
                <input
                type= "text"
                name="username"
               
                className="from-control"
                />
                <br/> 
                <label>Contraseña: </label>
                <br/>
                <input
                name= "password"
             
                    type= "password"
                    className="from-control"
                    />
                    <br />
                    <button className ="btn btn-primary"  > Registrarse</button>
                    <br/>
                    <a>¿Ya tiene cuenta? </a><Link to="/">Inicie Sesion</Link>
                    
                </form>
           
                </div>
            </div>
        </div>
         
    )
}

export default Registro;