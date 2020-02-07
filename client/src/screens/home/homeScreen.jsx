// Packages
import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";

// Local file imports
import ProductIntro from "./productIntro";
import Navbar from "../../components/navbar";

const HomeScreen = () => {
  return (
    <Fragment>
      <main>
        <Navbar />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          component="main"
        >
          <ProductIntro />
        </Grid>
      </main>

      <Grid>{/* Footer Grid */}</Grid>
    </Fragment>
  );
};

export default HomeScreen;
