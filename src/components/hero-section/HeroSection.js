import React from "react";
// import { Container } from "react-bootstrap";
import "./heroSection.css";
const HeroSection = () => {
  return (
    <section className="py-3">
      <h1>Hero Section</h1>
      <div className="inner-hero">
        <div className="summer">summer</div>
        <div className="winter">winter</div>
        <div className="norml">norml</div>
      </div>
    </section>
  );
};

export default HeroSection;
