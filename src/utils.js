import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




export function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
    <Button onClick={() => console.log(getAllUsers())}>getAllUsers</Button>
    <Button onClick={() => console.log(getAllSites())}>getAllSites</Button>
    <Button onClick={() => console.log(getSitesByName())}>getSitesByName</Button>
   
    </Stack>
  );
}

function getAllUsers()
{
    fetch ('http://localhost:777/users')
    .then (function (response) { 
        return response.json();
    })
     .then(function (response) {
    console.log(response)
   
 })
}

function getAllSites()
{
    fetch ('http://localhost:777/sites')
    .then (function (response) { 
        return response.json();
    })
     .then(function (response) {
    console.log(response)
   
 })
}
function getSitesByName()
{
    fetch ("http://localhost:777/sites?name=Fortaleza del cerro")
    .then (function (response) { 
        return response.json();
    })
     .then(function (response) {
    console.log(response)
   
 })
}
export function registrarUsuario(){
    fetch('http://localhost:777/users', {
        headers: {
        'Content-type': 'application/json'
        },
        method: 'PUT',
        body: 32,
       }).then(function (data) {
        console.log(data);
       });

}

