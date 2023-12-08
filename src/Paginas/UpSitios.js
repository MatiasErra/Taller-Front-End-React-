
import React, { Component } from 'react';
import "../css/Centro.css";
import axios
 from 'axios';
 import Cookies from 'universal-cookie';

 const cookies = new Cookies()

 const baseUrl='http://localhost:777/sites'
 var arrayAuxiliar=[];
const UpSitios=() => {

  const SubirSitio=(e)=>{
    e.preventDefault();

    axios.get(baseUrl, {params: {name:e.target.nombre.value}})
    .then(response=>{
        if(response.data.length==0)
        {
    axios.post(baseUrl, {name:e.target.nombre.value, type:e.target.tipo.value, city:e.target.ciudad.value , description:e.target.descripcion.value, address:e.target.ubicacion.value, 
        userId:cookies.get("id"),
        image:arrayAuxiliar[1]})
        window.location.href="./home";
 
        }else{
            alert("El sitio ya existe"); 
            console.log(arrayAuxiliar[1])
        }
   
})

}
const convertiraBase64=(archivos)=>{
    Array.from(archivos).forEach(archivo=>{
    var reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload=function(){

        var base64 = reader.result;
        //console.log(base64);
        arrayAuxiliar=base64.split(',');
       console.log(arrayAuxiliar[1])

    }
})

}
  
    return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                    <form onSubmit={SubirSitio} >
                   <h2>Subir sitio</h2>
                    <label className='Label'>Nombre   </label>
                    <input
                    type= "text"
                    name="nombre"
                    className="from-control"
                    /> 
                    <br/>
                    <label className='Label'>Tipo  </label>
                    <input 
                    type= "text"
                    name="tipo"
                    className="from-control"
                    /> 
                     <br/>
                    <label className='Label'>Ciudad  </label>
                    <input
                    type= "text"
                    name="ciudad"
                    className="from-control"
                    />
                     <br/>
                    <label className='Label'>Descripcion  </label>
                    <input
                    type= "text"
                    name="descripcion"
                    className="from-control"
                    />
                      <br/>
                    <label className='Label'>Ubicacion  </label>
                    <input
                    type= "text"
                    name="ubicacion"
                    className="from-control"
                    />
                    <br/>
                    <input type='file'  onChange={(e)=>convertiraBase64(e.target.files)}></input>
                        <br />
                        <button className ="btn btn-primary"  >  Subir sitio</button>
                        <br/>
                     
               
                    </form>
                  
                    </div>
                </div>
            </div>
             
        
    );
  }


export default UpSitios;
