import React, { Component } from "react"; //Import React Library
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material"; // import the specific components from material ui
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; //import icon
import { Link } from "react-router-dom";

const Header = ({ cartQuantity }) => {
  return (
    <>
      {/**Appbar component sets to prop*/}
      <AppBar component="nav">
        <Toolbar>
          {/*Title */}
          <Typography
            varient="h6"
            component="h5"
            style={{ textDecoration: "none", color: "#ebd834" }}
          >
            <strong>TeeRex Store</strong>
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Link to="/" style={{ textDecoration: "underline", color: "white" }}>
            <IconButton
              color="inherit"
              style={{
                textDecoration: "underline",
                color: "white",
              }}
            >
              {/*Product Icon*/}
              <Typography variant="h6" component="h5">
                products
              </Typography>
            </IconButton>
          </Link>
          <Link to="/Cart" style={{ color: "white" }}>
            <IconButton color="inherit">
              <ShoppingCartIcon />
              {/*Shopping Cart Icon*/}
              <Typography marginBottom="2rem">{cartQuantity}</Typography>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
