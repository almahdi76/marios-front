import { Outlet } from "react-router";

const ALayout = () => {
  return (
    <div className="ALayout">
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ALayout;
