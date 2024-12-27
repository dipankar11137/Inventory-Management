import React from "react";
import Footer from "../../Share/Footer";
import AllProduct from "./AllProduct.js/AllProduct";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import LatestProduct from "./Latest Product/LatestProduct";
import PaymentMethod from "./Payment Method/PaymentMethod";
import SampleProducts from "./Sample Product/SampleProducts";
import SSP from "./SSP/SSP";
import Video from "./Video/Video";

const Home = ({ setCategory }) => {
  return (
    <div>
    
      <Banner/>
      <LatestProduct/>
      <Category setCategory={setCategory} />
      <SampleProducts/>
      <AllProduct/>
      <Video/>
      <SSP />
      <PaymentMethod/>
      <Footer />
    </div>
  );
};

export default Home;
