import React from "react";
import "./hero.css";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <>
      <div className="hero__section">
        <div className="container welcome__hero-container">
          <div className="row justify-content-center">
            <Fade top>
              <div className="hero__card">
                <div className="card__content">
                  <Fade bottom>
                    <h5 className="card__subheading">
                      Lorem Ipsum is simply dummy text.{" "}
                    </h5>
                  </Fade>
                  <Fade top>
                    <h3 className="card__heading">
                      Affordable <br /> Roofing Services
                    </h3>
                  </Fade>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
