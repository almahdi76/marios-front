import { Box, Card, CardContent, Link } from '@mui/material'
import React from 'react'

const Succes = () => {
  return (
  
    <div style={{padding:'auto'}}>
  {/* minWidth: 275,maxWidth:"70%" */}
    
    <Card sx={{ display:"flex",justifyContent:"center",alignItems:"center",padding:"30px",
    height:"80%",}}>
    <CardContent style={{background:'#3b438b',width:'80%',height:'100%',borderRadius:"20px"}}>
   
    <h2 style={{color:"#fbc02c",textAlign:'center'}}>Felicitation ! </h2>
   
     <h2 style={{color:"#fbc02c",textAlign:'center'}}>Vous etre près à commander.</h2>
     <h2 style={{color:"#fbc02c",textAlign:'center'}}><Link>Passze votre premiière commande</Link></h2>
   
    </CardContent>
    </Card>
    {/* +++++++++++++++++++++++++++++++++++ */}
  </div>
  )
}

export default Succes
