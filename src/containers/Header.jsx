import * as React from "react";
import { Paper, Box, Container, Link, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { CssBaseline } from "@mui/material";

import logo from "../assets/images/logo.svg";
import { SecondaryHeader } from "../components";

const pages = ["ABOUT US", "STORIES", "CONTACT", "LOG IN"];

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar color="transparent" position="static">
        <Container>
          <Box
            sx={{
              py: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <img src={logo} alt="vasiti-logo" />
            <Box>
              {pages.map((page, index) => (
                <Link
                  href="#"
                  key={index}
                  underline="hover"
                  sx={{ color: "#242120", fontSize: "13px", ml: 4 }}>
                  {page}
                </Link>
              ))}
              <Button
                variant="contained"
                size="small"
                sx={{
                  ml: 2,
                  background: "#FF5C00",
                  fontSize: "13px",
                  "&:hover": {
                    background: "#FA5A00",
                  },
                }}>
                SIGN UP
              </Button>
            </Box>
          </Box>
        </Container>
        <SecondaryHeader />
      </AppBar>
    </Box>
  );
};

export default Header;
