import React from "react";
import { Container } from "react-bootstrap";
import "./home.css";
import HeroSection from "../../../components/hero-section/HeroSection";
import LayOut from "../../../components/common/LayOut";
import Product from "../../product/Product";
import Filtaring from "../../filtering/Filtaring";
const Home = () => {
  return (
    <>
      <LayOut>
        <Container>
          <HeroSection></HeroSection>
          <div className="home_diverder">
            <div>
              <Filtaring></Filtaring>
            </div>
            <div>
              <Product></Product>
            </div>
          </div>
        </Container>
      </LayOut>
    </>
  );
};

export default Home;
