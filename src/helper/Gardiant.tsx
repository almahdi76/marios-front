import { ReactElement } from "react";
import { Navigate } from "react-router";

type propsCh = {
  children: ReactElement;
  isLog: boolean;
};
const Gardiant = ({ children, isLog }: propsCh) => {
  if (!isLog) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Gardiant;
