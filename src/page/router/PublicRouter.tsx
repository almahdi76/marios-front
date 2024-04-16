import { Route, Routes } from "react-router";
import ALayout from "./ProtectedLayout";
import Login from "../login";
import PError from "../../components/PError";
import LoginUp from "../loginup/LoginUp";
type props = {
  setIsLog: Function;
  setUtilisateut: Function;
};

const PRouter = ({ setIsLog, setUtilisateut }: props) => {
  return (
    <div>
      <Routes>
        <Route element={<ALayout />}>
          <Route
            path=""
            element={
              <Login setUtilisateut={setUtilisateut} setIsLog={setIsLog} />
            }
          />
          <Route path="logup" element={<LoginUp setIsLog={setIsLog} />} />
          <Route path="*" element={<PError />} />
        </Route>
      </Routes>
    </div>
  );
};

export default PRouter;
