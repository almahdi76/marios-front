
import { Route, Routes } from 'react-router-dom'
import ProtectedLayout from './ProtectedLayout'
import Home from '../pages/home'
import Succes from '../pages/succes'
import Livraison from '../pages/livraison'

const ProtectedRouter = () => {
  return (
    <Routes>
    <Route   element={<ProtectedLayout />}>
    <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="succes" element={<Succes />} />
          <Route path="livrer" element={<Livraison />} />
          
      

   
 </Route>
  </Routes>
  )
}

export default ProtectedRouter
