import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#0077c2" }}>
      <Container>
        <Toolbar disableGutters id="back-to-top-anchor">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Abhaya Libre",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "white",
              textDecoration: "none!important",
            }}
          >
            Viet Phan
          </Typography>

          {/* expanded menu */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="sections of portfolio"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  display: "block",
                }}
              >
                <Link href="#abtme" underline="none" fontFamily={"Open Sans"}>
                  About Me
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  display: "block",
                }}
              >
                <Link
                  href="#projects"
                  underline="none"
                  fontFamily={"Open Sans"}
                >
                  Projects
                </Link>
              </Button>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Button
            href="https://github.com/v8phan"
            target="_blank"
            rel="noreferrer"
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
          >
            <GitHubIcon />
          </Button>
          <Button
            href="https://www.linkedin.com/in/viet-phan-889069147"
            target="_blank"
            rel="noreferrer"
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
          >
            <LinkedInIcon />
          </Button>

          {/* mobile */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              ml: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Abhaya Libre",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Viet Phan
          </Typography>
          <Box sx={{ my: 2, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                display: "block",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            >
              <Link
                href="#abtme"
                underline="none"
                color="white"
                fontFamily={"Open Sans"}
              >
                About Me
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                display: "block",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            >
              <Link
                href="#projects"
                underline="none"
                color="white"
                fontFamily={"Open Sans"}
              >
                Projects
              </Link>
            </Button>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Button
              href="https://github.com/v8phan"
              target="_blank"
              rel="noreferrer"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                display: { xs: "none", md: "flex" },
                color: "white",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            >
              <GitHubIcon />
            </Button>
            <Button
              href="https://www.linkedin.com/in/viet-phan-889069147"
              target="_blank"
              rel="noreferrer"
              sx={{
                display: { xs: "none", md: "flex" },
                color: "white",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            >
              <LinkedInIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
