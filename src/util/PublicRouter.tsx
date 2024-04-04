import { Route, Routes } from "react-router-dom"
import Login from "../pages/login"
import SignUp from "../pages/signup"
import PublicLayout from "./PublicLayout"



const PublicRouter = () => {
  return (
    <div>
    <Routes>
      <Route element={<PublicLayout />}>
      
      <Route path="" element={<Login />} />
      <Route path="logup" element={<SignUp />} />
     
   
   </Route>
    </Routes>
  
</div>
  )
}

export default PublicRouter
