import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "black", position: "static", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <div>
          <Button color="secondary" sx={{ color: "white", mr: 2 }}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
