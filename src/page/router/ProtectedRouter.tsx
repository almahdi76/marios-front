import React from "react";
import { Route, Routes } from "react-router";
import Home from "../home";
import ALayout from "./ProtectedLayout";
import PError from "../../components/PError";
import Succes from "../succes";
import Livrer from "../livrer";

type props = {
  utilisateur: string;
  setIsLog: Function;
};

const ARouter = ({ utilisateur }: props) => {
  return (
    <div>
      <Routes>
        <Route element={<ALayout />}>
          <Route index element={<Home utilisateur={utilisateur} />} />
          <Route path="home" element={<Home utilisateur={utilisateur} />} />

          <Route path="succes" element={<Succes />} />
          <Route path="livrer" element={<Livrer />} />
          <Route path="*" element={<PError />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ARouter;
