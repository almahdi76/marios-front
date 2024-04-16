import React from "react";
import { Outlet } from "react-router";

const PLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PLayout;
