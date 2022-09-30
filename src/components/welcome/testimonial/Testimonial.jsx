import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./testimonial.css";

import Fade from "react-reveal/Fade";
import img from "../../../assets/welcome/aboutimg.webp";

const Testimonial = () => {
  return (
    <>
      <div className="welcome__testimonial">
        <div className="container testimonial__container">
          <div className="row">
            <div className="testimonial__content-box">
              <Fade left>
                <div className="left col">
                  <img src={img} alt="" />
                </div>
              </Fade>
              <Fade right>
                <div className="right col">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="testimonial__content">
                        <h4 className="testimonial__heading">
                          Your Reliable Partner
                        </h4>
                        <Fade bottom>
                          <p className="content">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries.
                            <br />
                            <br />
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </Fade>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__content">
                        <h4 className="testimonial__heading">Why Hire Us?</h4>
                        <Fade bottom>
                          <p className="content">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries.
                            <br />
                            <br />
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </Fade>
                        <button className="btn btn-primary">Read More</button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__content">
                        <h4 className="testimonial__heading">Our Mission</h4>
                        <Fade bottom>
                          <p className="content">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries.
                            <br />
                            <br />
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </Fade>
                        <button className="btn btn-primary">Read More</button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
