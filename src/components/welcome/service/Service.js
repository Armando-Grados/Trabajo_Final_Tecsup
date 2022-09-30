import React from "react";
import "./service.css";
import Fade from "react-reveal/Fade";

const Service = () => {
  const mouseEnteredOne = (e) => {
    document.querySelector(".welcome__service").classList.add("first");
    document.querySelector(".welcome__service").classList.remove("second");
    document.querySelector(".welcome__service").classList.remove("third");
    document.querySelector(".welcome__service").classList.remove("fourth");
  };
  const mouseEnteredTwo = (e) => {
    document.querySelector(".welcome__service").classList.add("second");
    document.querySelector(".welcome__service").classList.remove("first");
    document.querySelector(".welcome__service").classList.remove("third");
    document.querySelector(".welcome__service").classList.remove("fourth");
  };
  const mouseEnteredThree = (e) => {
    document.querySelector(".welcome__service").classList.add("third");
    document.querySelector(".welcome__service").classList.remove("first");
    document.querySelector(".welcome__service").classList.remove("second");
    document.querySelector(".welcome__service").classList.remove("fourth");
  };
  const mouseEnteredFour = (e) => {
    document.querySelector(".welcome__service").classList.add("fourth");
    document.querySelector(".welcome__service").classList.remove("first");
    document.querySelector(".welcome__service").classList.remove("second");
    document.querySelector(".welcome__service").classList.remove("third");
  };

  return (
    <>
      <div className="welcome__service first">
        <div className=" height__100">
          <div className="row height__100">
            <Fade right>
              <div className={` welcome__service-item height__100`}>
                <div
                  className="box box__item-1 height__100"
                  onMouseOver={mouseEnteredOne}
                >
                  <div className="content">
                    <h3 className="heading">Residential Roofing</h3>
                    <p className="pera">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
                <div
                  className="box box__item-2 height__100"
                  onMouseOver={mouseEnteredTwo}
                >
                  <div className="content">
                    <h3 className="heading">Commercial Roofing</h3>
                    <p className="pera">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="box box__item-3 height__100"
                  onMouseOver={mouseEnteredThree}
                >
                  <div className="content">
                    <h3 className="heading">Siding Services</h3>
                    <p className="pera">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
                <div
                  className="box box__item-4 height__100"
                  onMouseOver={mouseEnteredFour}
                >
                  <div className="content">
                    <h3 className="heading">Windows & Doors</h3>
                    <p className="pera">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
