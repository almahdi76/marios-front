
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PublicRouter from './util/PublicRouter';
import Gardiant from './helper/Gardiant';
import ProtectedRouter from './util/ProtectedRouter';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
     
      <Routes>
        <Route path="/login/*" element={<PublicRouter />} />
        <Route index element={<PublicRouter />} />
      
        <Route path="/pizzas/*" element={

          <Gardiant> 
        <ProtectedRouter />
        </Gardiant>
        } />

      
        </Routes>
    </div>
  );
}

export default App;
