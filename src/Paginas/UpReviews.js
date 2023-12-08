import React from "react";
import "../css/estilo.css";
import {Col} from "react-bootstrap";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useParams } from "react-router";
import Cookies from 'universal-cookie';

 const cookies = new Cookies()
 const baseUrl='http://localhost:777/reviews'

const UpReviews = () => {
    const [value, setValue] = React.useState(2);
    let { id, name} = useParams();
    const SubirReview=(e)=>{
        e.preventDefault();
    
        axios.get(baseUrl, {params: {userName: cookies.get("user"), siteId: id  }})
        .then(response=>{
            if(response.data.length==0)
            {
          axios.post(baseUrl, {rating: value, description:e.target.comentarios.value, userId:cookies.get("id"), siteId:id, userName: cookies.get("user") })
          alert("Review agregada con exito")
          window.location.href="/home"
            }
            else
            {
                alert("No se pudo agregar la review")
            }
        })
    }
          

   
    return(

        
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
  
            <div className="containerPrincipal">
                            <div className="containerSecundario">
                                <div className="form-group">
                                <form onSubmit={SubirReview} >
                               <h2>Añadir una review a: {name}</h2>
                               <Typography component="legend"></Typography>
                              <Rating
                             name="simple-controlled"
                             value={value}
                            onChange={(event, newValue) => {
                             setValue(newValue);
                             }}
                             />
                                <br/>
                            
                                  <textarea className="from-control" name="comentarios" rows="10" cols="40">Descripcion</textarea>
                                
                                    <br />
                                    <button className ="btn btn-primary"  > Dejar Review</button>
                                    <br/>
                                 
                           
                                </form>
                              
                                </div>
                            </div>
                        </div>
                        </Box>
                 )
    
}


export default UpReviews;