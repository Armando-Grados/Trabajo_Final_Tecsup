import React from "react";
import Hero from "../components/welcome/hero/Hero";
import Service from "../components/welcome/service/Service";
import Testomonial from "../components/welcome/testimonial/Testimonial";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
// import HomeCommends from "../components/home/HomeCommends";
import HomeCommends2 from "../components/welcome/review/HomeCommends2";
import Footer from "../components/section/Footer";

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
              <div className="section" >
              <HomeCommends2 />
              </div>
              <div className="section bg-black">
              <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default WelcomePge;
