import React, { useRef } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";

import Logo from "../../Assests/logo.png";
import Logo_black from "../../Assests/logo-black.png";

const drawerWidth = 240;
const navItems = ["About us", "Who Are We", "Team", "Contact us"];

const Navbar = ({ resultRef, resultReftwo, resultRefThree, resultRefFour }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleScrollWhatIsGlobX = (e) => {
    e.preventDefault();
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollWhatWeAre = (e) => {
    e.preventDefault();
    resultReftwo.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollTeam = (e) => {
    e.preventDefault();
    resultRefThree.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollContactUs = (e) => {
    e.preventDefault();
    resultRefFour.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <div className="mobileSidebar">
        <Button variant="h6" sx={{ my: 2 }}>
          <img src={Logo_black} alt="logo" className="logo" />
        </Button>
        <Button>
          <CloseIcon style={{ color: "black" }} onClick={handleDrawerToggle} />
        </Button>
      </div>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              primary="About Us"
              style={{ textTransform: "none" }}
              onClick={handleScrollWhatIsGlobX}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              primary="Who Are We"
              style={{ textTransform: "none" }}
              onClick={handleScrollWhatWeAre}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            className="navbar_header"
          >
            <ListItemText
              primary="Team"
              style={{ textTransform: "none" }}
              onClick={handleScrollTeam}
            />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              primary="Contact Us"
              style={{
                textTransform: "none",
                background: "#6600cc",
                padding: "20px",
                margin: "20px",
                color: "white",
              }}
              onClick={handleScrollContactUs}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        style={{ background: "black", borderBottom: "1px solid white" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={Logo} alt="logo" className="logo" />
          </Button>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            className="navbar_header"
          >
            <Button sx={{ color: "#fff" }} onClick={handleScrollWhatIsGlobX}>
              About Us
            </Button>
            <Button sx={{ color: "#fff" }} onClick={handleScrollWhatWeAre}>
              What Are We
            </Button>
            <Button sx={{ color: "#fff" }} onClick={handleScrollTeam}>
              Team
            </Button>
            <Button sx={{ color: "#fff" }} onClick={handleScrollContactUs}>
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
