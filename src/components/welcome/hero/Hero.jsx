import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero__section">
        <div className="container welcome__hero-container">
          <div className="row justify-content-center">
            <div className="hero__card">
              <div className="card__content">
                <h5 className="card__subheading">
                  Lorem Ipsum is simply dummy text.{" "}
                </h5>
                <h3 className="card__heading">
                  Affordable <br /> Roofing Services
                </h3>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
