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
            <Grid item xs={12}>
              <div className="home__category">
                <h2>Top Tech deals</h2>
              </div>
            </Grid>
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
                title="Samsung LC49HG90DMUXEN 49 Curved Ultra Wide LED Monitor - 3840 x 1080, 144Hz"
                price={2000}
                rating={4}
                image="/images/product-6.jpg"
              />
            </Grid>
            <Grid item xs={12}>
              <div className="home__category">
                <h2>Top Sports deals</h2>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Product
                id="7"
                title="Spinosaurus Swim Goggles, Swimming Goggles-Fashionable Anti UV Wide Frame Swim Goggles"
                price={30}
                rating={5}
                image="/images/product-7.jpg"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Product
                id="8"
                title="Nike Mercurial Superfly VII Academy CR7 Turf Kids Football Boots"
                price={119.99}
                rating={4}
                image="/images/product-8.jpg"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Product
                id="9"
                title="Louisville Slugger Vapor Softball Bat (28oz)"
                price={169}
                rating={3}
                image="/images/product-9.jpg"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Product
                id="10"
                title="Chinatown Market Smiley Basketball Yellow"
                price={98}
                rating={4}
                image="/images/product-10.jpeg"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Product
                id="11"
                title="ESSENTIAL 6MM YOGA MAT - GREEN"
                price={25}
                rating={5}
                image="/images/product-11.jpg"
              />
            </Grid>
            <Grid item xs={12}>
              <Product
                id="12"
                title="Premium Golf Club set"
                price={540}
                rating={5}
                image="/images/product-12.png"
              />
            </Grid>
            <Grid item xs={12}>
              <div className="home__category">
                <h2>Top Home Convention deals</h2>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Product
                id="13"
                title="Samsung Family Hub™ RS68N8941SL Wifi Connected American Fridge Freezer - Aluminium"
                price={5000}
                rating={5}
                image="/images/product-13.jpg"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Product
                id="14"
                title="SAMSUNG 65 INCH 4K CURVED SMART OLED TV"
                price={3500}
                rating={4}
                image="/images/product-14.jpeg"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Product
                id="15"
                title="Antique slik persian carpet"
                price={2600}
                rating={5}
                image="/images/product-15.jpg"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Product
                id="16"
                title="LG Washing Machine 10.5 Kg 1400 Rpm 6 Motion Silver Steel"
                price={3000}
                rating={4}
                image="/images/product-16.jpg"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Product
                id="17"
                title="Bosch SMS25AB00G Full Size Dishwasher - Black"
                price={2000}
                rating={4}
                image="/images/product-17.jpeg"
              />
            </Grid>
            <Grid item xs={12}>
              <Product
                id="18"
                title="Concerto Modular Sofa - Curved Sofa | Modular Flexibility"
                price={4325}
                rating={5}
                image="/images/product-18.jpg"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
