import React from "react";
import Hero from "../components/welcome/hero/Hero";
import Service from "../components/welcome/service/Service";
import Testomonial from "../components/welcome/testimonial/Testimonial";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

const WelcomePge = () => {
  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000} /* Options here */
        render={(comp) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Hero />
              </div>
              <div className="section">
                <Testomonial />
              </div>
              <div className="section">
                <Service />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default WelcomePge;
