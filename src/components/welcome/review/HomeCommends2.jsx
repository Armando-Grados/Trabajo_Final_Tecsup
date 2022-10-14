import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination  } from 'swiper';
import { EffectCoverflow } from 'swiper';
import star from '../../../assets/svg/star.svg';
const HomeCommends2 = ( ) => {
  return (
    <section  >
      <Swiper
          loop={true}
        modules={[Pagination, EffectCoverflow ]}
        effect="coverflow"
        grabCursor="true"
        centeredSlides="true"
        slidesPerView='auto' 
        spaceBetween={30}
        // slidesPerView={2}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1.19,
        //   slideShadows: true
        // }}

        // breakpoints={{
        //   1024: {
        //     slidesPerView: 2,
        //   },
        // }}
        pagination={{ clickable: true }}
        style={{
          width: "100%", 
          paddingTop: "50px",
          paddingBottom: "50px"
        }}
      >

        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            maxWidth: "400px"
          }}>
          <div className="testimonial_Box">
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/157/157248.png" className="quote" alt="ga" />
            <div className="testimonial_Content">
              <p> Very comfortable </p>
              <p>shoes great for daily wear</p>
              <p>Fit as expected, comfortable</p>
              <p>Great light weight running shoe</p>
              <p> Super cute and comfortable for daily wear, gym and running, goes with every outfit I have. Definitely recommend 😇</p>
              <div className="details">
                <div className="imgBx">
                  <img className="person" src="data:image/png;base64,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" alt="" />
                </div>
                <h3>
                  ALGUIEN FAMOSO
                  <br />
                  <span>Desarrollador Front</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "400px"
          }}>
          <div className="testimonial_Box">
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/157/157248.png" className="quote" alt="ga" />
            <div className="testimonial_Content">
              <p> Very comfortable </p>
              <p>shoes great for daily wear</p>
              <p>Fit as expected, comfortable</p>
              <p>Great light weight running shoe</p>
              <p> Super cute and comfortable for daily wear, gym and running, goes with every outfit I have. Definitely recommend 😇</p>
              <div className="details">
                <div className="imgBx">
                  <img className="person" src="data:image/png;base64,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" alt="" />
                </div>
                <h3>
                  ALGUIEN FAMOSO
                  <br />
                  <span>Desarrollador Front</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "400px"
          }}>
          <div className="testimonial_Box">
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/157/157248.png" className="quote" alt="ga" />
            <div className="testimonial_Content">
              <p> Very comfortable </p>
              <p>shoes great for daily wear</p>
              <p>Fit as expected, comfortable</p>
              <p>Great light weight running shoe</p>
              <p> Super cute and comfortable for daily wear, gym and running, goes with every outfit I have. Definitely recommend 😇</p>
              <div className="details">
                <div className="imgBx">
                  <img className="person" src="data:image/png;base64,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" alt="" />
                </div>
                <h3>
                  ALGUIEN FAMOSO
                  <br />
                  <span>Desarrollador Front</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "400px"
          }}>
          <div className="testimonial_Box">
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img className="star" src={star} alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/157/157248.png" className="quote" alt="ga" />
            <div className="testimonial_Content">
              <p> Very comfortable </p>
              <p>shoes great for daily wear</p>
              <p>Fit as expected, comfortable</p>
              <p>Great light weight running shoe</p>
              <p> Super cute and comfortable for daily wear, gym and running, goes with every outfit I have. Definitely recommend 😇</p>
              <div className="details">
                <div className="imgBx">
                  <img className="person" src="data:image/png;base64,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" alt="" />
                </div>
                <h3>
                  ALGUIEN FAMOSO
                  <br />
                  <span>Desarrollador Front</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial_Box">
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/157/157248.png" className="quote" alt="ga" />
              <div className="testimonial_Content">
                <p> Very comfortable </p>
                <p>shoes great for daily wear</p>
                <p>Fit as expected, comfortable</p>
                <p>Great light weight running shoe</p>
                <p> Super cute and comfortable for daily wear, gym and running, goes with every outfit I have. Definitely recommend 😇</p>
                <div className="details">
                  <div className="imgBx">
                    <img className="person" src="data:image/png;base64,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" alt="" />
                  </div>
                  <h3>
                    ALGUIEN FAMOSO
                    <br />
                    <span>Desarrollador Front</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial_Box">
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/157/157248.png" className="quote" alt="ga" />
              <div className="testimonial_Content">
                <p> Very comfortable </p>
                <p>shoes great for daily wear</p>
                <p>Fit as expected, comfortable</p>
                <p>Great light weight running shoe</p>
                <p> Super cute and comfortable for daily wear, gym and running, goes with every outfit I have. Definitely recommend 😇</p>
                <div className="details">
                  <div className="imgBx">
                    <img className="person" src="data:image/png;base64,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" alt="" />
                  </div>
                  <h3>
                    ALGUIEN FAMOSO
                    <br />
                    <span>Desarrollador Front</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial_Box">
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/157/157248.png" className="quote" alt="ga" />
              <div className="testimonial_Content">
                <p> Very comfortable </p>
                <p>shoes great for daily wear</p>
                <p>Fit as expected, comfortable</p>
                <p>Great light weight running shoe</p>
                <p> Super cute and comfortable for daily wear, gym and running, goes with every outfit I have. Definitely recommend 😇</p>
                <div className="details">
                  <div className="imgBx">
                    <img className="person" src="data:image/png;base64,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" alt="" />
                  </div>
                  <h3>
                    ALGUIEN FAMOSO
                    <br />
                    <span>Desarrollador Front</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial_Box">
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img className="star" src="./star-svgrepo-com.svg" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/157/157248.png" className="quote" alt="ga" />
              <div className="testimonial_Content">
                <p> Very comfortable </p>
                <p>shoes great for daily wear</p>
                <p>Fit as expected, comfortable</p>
                <p>Great light weight running shoe</p>
                <p> Super cute and comfortable for daily wear, gym and running, goes with every outfit I have. Definitely recommend 😇</p>
                <div className="details">
                  <div className="imgBx">
                    <img className="person" src="data:image/png;base64,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" alt="" />
                  </div>
                  <h3>
                    ALGUIEN FAMOSO
                    <br />
                    <span>Desarrollador Front</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div> */}

    </section>
  );
};

export default HomeCommends2;