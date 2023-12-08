import React from "react";
import "../css/estilo.css";
import "../css/Centro.css";
import Box from '@mui/material/Box';
import {Card, ListGroup, ListGroupItem, Row, Col, Container, Button} from "react-bootstrap";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
var reviews;



const Reviews = () => {
  let { id, name } = useParams();
  const [value, setValue] = React.useState(2);
  fetch('http://localhost:777/reviews?siteId='+id, {
      headers: {
          'Content-type': 'application/json'
          },
      method: 'GET'           
  })
  .then(response => response.json())
  .then(data => reviews = data);


  
  return(   
     <><h1>Reviews de {name}</h1>
     <Row  >
    {reviews && reviews.map((reviews)=>(
      <Col  lg="2" className="Mid">
         <Box 
         sx={{
           '& > legend': { mt: 2 },
         }}
       >
      <>
      <Typography key={reviews.id} component="legend">{reviews.userName}</Typography>
       <p className="uwu">{reviews.description}</p>
       <Rating name="read-only" value={reviews.rating} readOnly /></>
      

      
         </Box>
         </Col>
     
        ))}
        </Row>
        <div className="text-center">
         <Button variant="primary" as={Link} to={"/Upreviews/" + id + '/'+name}>Dejar una review</Button>
         </div>
         </>
  )
    
  
    };

export default Reviews;