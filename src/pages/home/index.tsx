import React, { useEffect, useState } from 'react'
import Pizza from '../../model/pizza'
import { mockDataPizza } from '../../data/dataPizza'
import CardPizza from '../../components/listPizza'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [pizza,setPizza]=useState<Pizza[]>(mockDataPizza)
  const navigate=useNavigate()
  useEffect(()=>{
   setPizza(mockDataPizza)
  
   
  },[])
  return (
    <div>
      <Button onClick={()=>{navigate("/pizzas/livrer")}}>
      <AddShoppingCartIcon />
      </Button>
      <h1>sélectionnez vous pizzas</h1>
      {
        pizza?.map((pizza:Pizza)=>( 
          <CardPizza pizza={pizza} />
        ))
      }

    </div>
  )
}

export default Home
