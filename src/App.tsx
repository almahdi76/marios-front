import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Gardiant from "./helper/Gardiant";
import PRouter from "./page/router/PublicRouter";
import ARouter from "./page/router/ProtectedRouter";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLog, setIsLog] = useState(false);
  const [utilisateur, setUtilisateut] = useState("");

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/login/*"
          element={
            <PRouter setUtilisateut={setUtilisateut} setIsLog={setIsLog} />
          }
        />
        <Route
          index
          element={
            <PRouter setUtilisateut={setUtilisateut} setIsLog={setIsLog} />
          }
        />

        <Route
          path="/mpizza/*"
          element={
            <Gardiant isLog={isLog}>
              <ARouter utilisateur={utilisateur} setIsLog={setIsLog} />
            </Gardiant>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
