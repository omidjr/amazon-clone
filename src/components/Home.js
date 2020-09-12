import React from "react";
import { Grid } from "@material-ui/core";
import { Product } from "./Product";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__conatiner">
        <img src="/images/banner.jpg" alt="Banner" className="home__image" />
        <div className="home__row">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Product
                id="1"
                title="The lean startup"
                price={11.96}
                rating={5}
                image="/images/product-1.jpg"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Product
                id="2"
                title="Iphone X - 64GB - Black"
                price={499.0}
                rating={4}
                image="/images/product-2.jpeg"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Product
                id="3"
                title="SSD - 250GB - Samsung 860 EVO"
                price={250.55}
                rating={4}
                image="/images/product-3.jpg"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Product
                id="4"
                title="Lenovo 14 ThinkPad X1 Carbon Ultrabook (6th Gen)"
                price={1632.95}
                rating={5}
                image="/images/product-4.jpg"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Product
                id="5"
                title="PlayStation 4 Pro 500 million 2TB Limited edition console"
                price={1269.88}
                rating={5}
                image="/images/product-5.jpg"
              />
            </Grid>
            <Grid item xs={12}>
              <Product
                id="6"
                title="
          Amazon.co.uk
          Samsung LC49HG90DMUXEN 49 Curved Ultra Wide LED Monitor - 3840 x 1080, 144Hz"
                price={2000}
                rating={4}
                image="/images/product-6.jpg"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
