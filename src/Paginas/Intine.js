import React from "react";
import "../css/estilo.css";
import {Col} from "react-bootstrap";
import { render } from "@testing-library/react";
import { useParams } from "react-router";
import axios from 'axios';
 import Cookies from 'universal-cookie';

 const cookies = new Cookies()
 const baseUrl='http://localhost:777/itinerary'
 const Intin=()=>{
    let { id, name } = useParams();
    console.log(name)
    console.log(id)

    const SubirIntin=(e)=>{
        e.preventDefault();
    
        axios.get(baseUrl, {params: {name:e.target.nombre.value}})
        .then(response=>{
            if(response.data.length==0)
            {
                axios.post(baseUrl, {name:e.target.nombre.value, description:e.target.comentarios.value, userId:cookies.get("id"), siteId:id , nameSite: name})
               alert("Intinerario añadido con exito")
            }
            else{
                alert("El intinerario ya existe");
            }

        })
    }
     return(
<div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                    <form onSubmit={SubirIntin} >
                   <h2>Añadir al intineraro: {name}</h2>
                    <label className='Label'>Nombre   </label>
                    <input
                    type= "text"
                    name="nombre"
                    className="from-control"
                    /> 
                    <br/>
                
                      <textarea className="from-control" name="comentarios" rows="10" cols="40">Descripcion</textarea>
                    
                        <br />
                        <button className ="btn btn-primary"  > Subir intinerario</button>
                        <br/>
                     
               
                    </form>
                  
                    </div>
                </div>
            </div>
  
     )


 } 
 export default Intin;