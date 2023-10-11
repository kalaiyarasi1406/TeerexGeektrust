import React from "react";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Stack,
  TextField,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "./Header";
import "./Cart.css";

const CartItem = ({
  cart,
  itemQty,
  handleCartIncrement,
  handleCartDecrement,
  handleCartDelete,
}) => (
  <Stack key={cart.id} sx={{ maxWidth: "100rem", pt: 5 }}>
    <Card
      className="cartItem"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#faedf5",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p1: 1,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 95 }}
            image={cart.imageURL}
            alt="Shopping Image"
          />
        </Box>
        <CardContent
          sx={{
            flex: "1 0 auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            component="div"
            variant="subtitle1"
            style={{ color: "#e0ab19", fontStyle: "italic" }}
          >
            {cart.name}
          </Typography>
          <Typography component="div" variant="subtitle1">
            Rs {cart.price}
          </Typography>
        </CardContent>
      </Box>
      <Box className="cartButton">
        <TextField
          variant="outlined"
          value={"Qty = " + itemQty[cart.id]}
          sx={{ width: 300, pt: 2, mx: 1 }}
          InputProps={{
            endAdornment: (
              <>
                <IconButton onClick={() => handleCartIncrement(cart)}>
                  <ArrowUpwardIcon />
                </IconButton>
                <IconButton onClick={() => handleCartDecrement(cart)}>
                  <ArrowDownwardIcon />
                </IconButton>
              </>
            ),
          }}
        />
        <TextField
          type="Button"
          value="Delete"
          sx={{ width: 180, pt: 2, mx: 1 }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => handleCartDelete(cart)}>
                <DeleteIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Card>
  </Stack>
);

const Cart = ({
  cartItems,
  itemQty,
  handleCartIncrement,
  handleCartDecrement,
  handleCartDelete,
  cartQuantity,
  totalAmounts,
}) => {
  const isCartEmpty = cartItems.length === 0;

  return (
    <Box className="cart">
      <Header cartQuantity={cartQuantity} />
      <Box sx={{ m: 3, p: 2 }}>
        <Typography
          variant="h6"
          component="div"
          style={{
            fontStyle: "italic",
          }}
        >
          Shopping Cart
        </Typography>
        {isCartEmpty
          ? null
          : cartItems.map((cart) => (
              <CartItem
                key={cart.id}
                cart={cart}
                itemQty={itemQty}
                handleCartIncrement={handleCartIncrement}
                handleCartDecrement={handleCartDecrement}
                handleCartDelete={handleCartDelete}
              />
            ))}
        <Divider sx={{ maxWidth: "100rem", marginTop: "2rem" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            maxWidth: "50rem",
          }}
        >
          <Typography variant="h5" component="div">
            Total Amount : {totalAmounts}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
