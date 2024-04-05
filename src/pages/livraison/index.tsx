import { Box, Card, CardContent, Link } from '@mui/material'
import MopedIcon from '@mui/icons-material/Moped';
import { useNavigate } from 'react-router-dom';

const Livraison = () => {
  const navigate=useNavigate();
  return (
    <div style={{padding:'auto'}}>
    {/* minWidth: 275,maxWidth:"70%" */}
      
      <Card sx={{ display:"flex",justifyContent:"center",alignItems:"center",padding:"30px",
      height:"80%",}}>
      <CardContent style={{background:'#3b438b',width:'80%',height:'100%',borderRadius:"20px"}}>
     
        <Box style={{color:"#fbc02c"}}>
        <h2 >Votre commande est en preparation </h2>
        <MopedIcon  sx={{ fontSize: 140}}/>
       <h2 >Elle sera livrée en 30minutes.</h2>
       <h2 ><Link  onClick={() => {
                  navigate("/pizzas");
                }} style={{color:"#fbc02c"}}>Retoure à la page de commande</Link></h2>
        </Box>
     
      </CardContent>
      </Card>
      {/* +++++++++++++++++++++++++++++++++++ */}
    </div>
  )
}

export default Livraison