import React from "react";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

/**
 **
 * @param {string|number} id - A unique identifier
 * @param {string} name - title of the product.
 * @param {string} imageURL - product's image.
 * @param {number} price - price of the product.
 *
 * @param {function} addToCart - A callback function to add a product to the shopping cart.
 */
const Productpage = ({ products, addToCart }) => (
  <Box>
    <Grid container spacing={3}>
      {/*Products card page*/}
      {products.map((id, name, imageURL, price) => (
        <Grid item key={id} xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card>
            {/* Name of the components */}
            <Typography
              variant="h6"
              paddingLeft={2}
              style={{ color: "#e0ab19", fontStyle: "italic" }}
            >
              {id.name}
            </Typography>

            {/* Image  of the products*/}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "8rem",
                p: 5,
              }}
            >
              <CardMedia
                component="img"
                alt={id.imageURL}
                image={id.imageURL}
                sx={{ maxWidth: "11rem" }}
              />
            </Box>

            <CardActions>
              {/* Product Price */}
              <Typography variant="h6">Rs {id.price}</Typography>
              <Box sx={{ flexGrow: 1 }}></Box>

              {/* Add to Cart Button */}
              <Button
                size="large"
                color="primary"
                onClick={() => addToCart(id, name, price)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Productpage;
