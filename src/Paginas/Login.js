    import React, {Fragment} from "react";
import "../css/Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";


const baseUrl='http://localhost:777/users'
const cookies = new Cookies()

export function Login(){
    const IniciarSesion=async(e)=>{
    e.preventDefault();
    axios.get(baseUrl, {params: {user:e.target.username.value, password:e.target.password.value}})
    .then(response=>{
        if(response.data.length>0)
        {
            var respuesta=response.data[0];
            cookies.set('id', respuesta.id, {path:"/"})
            cookies.set('user', respuesta.user, {path:"/"})
            alert(`Bienvenido ${respuesta.user}`);
            window.location.href="./home";
        }
        else{
        alert("El usuario o la contraseña no son correctos"); 
        console.log(response.data);
        }
    })
    .catch(error=>{
        console.log(error);
    })

    }
  

        return(
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                    <form onSubmit={IniciarSesion}>
                   <h2>Iniciar sesion</h2>
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
                        <button className ="btn btn-primary"  >  iniciar sesion</button>
                        <br/>
                        <a>¿No tiene cuenta? </a><Link to="/registro">Registrese</Link>
               
                    </form>
                  
                    </div>
                </div>
            </div>
             
        )
    }
    export default Login;
