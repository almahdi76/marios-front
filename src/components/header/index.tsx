import logos from "./logo.png";
import Box from "@mui/material/Box";

import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ background: "#3b438b" }}>
            <Toolbar>
              <img
                style={{ width: "70px" }}
                src={logos}
                alt={"logo mario"}
                loading="lazy"
              />
              <Typography
                align="center"
                variant="h3"
                component="div"
                sx={{ flexGrow: 1, color: "#fbc02c", fontWeight: "bold" }}
              >
                Chez Mario
              </Typography>
              {<div></div>}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};

export default Header;
