
import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
type propsCh={
    children:ReactElement
}
const Gardiant = ({children}:propsCh) => {
    
    let isLogged=false
    // if(!ServiceLogin.isLogged()){
        if(isLogged){
        return < Navigate  to="/login"/>}
    // }
   
    return children

  
}
export default Gardiant
