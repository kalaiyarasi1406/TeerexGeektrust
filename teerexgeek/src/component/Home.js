import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "./Header";
import Filter from "./Filter";
import Search from "./Search";
import Product from "./Product";
import "./Home.css";
import { Dialog, DialogContent, Stack } from "@mui/material";

const Home = (props) => {
  const {
    cartQuantity,
    filterQuery,
    handleFilterMobile,
    filterChecking,
    handleFilterChange,
    handleSearch,
    filteredProducts,
    addToCart,
  } = props;

  return (
    <Box className="home">
      <Header cartQuantity={cartQuantity} />
      <Grid container spacing={1}>
        <Grid item xs={12} md={4} xl={3}>
          {filterQuery ? (
            <Dialog
              open={filterQuery}
              onClose={handleFilterMobile}
              sx={{ maxHeight: "100vh" }}
            >
              <DialogContent className="customcontent">
                <Stack className=" filterDialogContent" justifyContent="center">
                  <Filter
                    filterChecking={filterChecking}
                    onFilterChecking={handleFilterChange}
                  />
                </Stack>
              </DialogContent>
            </Dialog>
          ) : (
            <Box className="filterPage">
              <Filter
                filterChecking={filterChecking}
                onFilterChecking={handleFilterChange}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Box className="searchPage">
            <Search
              onSearch={handleSearch}
              onFilter={handleFilterMobile}
              onFilterQuery={filterQuery}
            />
          </Box>
          <Box className="productPage">
            <Product products={filteredProducts} addToCart={addToCart} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
