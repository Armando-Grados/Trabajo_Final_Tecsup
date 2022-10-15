import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./testimonial.css";

// import img from "../../../assets/welcome/aboutimg.webp";
// import img from "../../../assets/welcome/3.png";
import img from "../../../assets/welcome/2.webp";


const Testimonial = () => {
  return (
    <>
      <div className="welcome__testimonial">
        <div className="container testimonial__container">
          <div className="row">
            <div className="testimonial__content-box">
                <div className="left col">
                  <img src={img}  alt="" />
                </div>
                <div className="right col">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="testimonial__content">
                        <h4 className="testimonial__heading">
                          Tu tiendita de confianza
                        </h4>
                          <p className="content">
                            <br />
                          Tienda deportiva “Wolf Store” La empresa sport Azuay se dedica a la producción y comercialización de ropa deportiva de alta calidad y gusto para niños y jóvenes de ambos sexos pertenecientes a la Ciudad de Cuenca. La empresa es de tipo unipersonal y sus productos son comercializados con el nombre de marca de la empresa. Hoy se ve que la competencia va creciendo a pasos agigantados y de esta manera puede empezar a plantearse estrategias en cuanto a precio, servicio y entrega del pedido
                            
                          </p>
                          <button className="btn btn-primary">Sigan Viendo</button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__content">
                        <h4 className="testimonial__heading">Porque elegirnos</h4>
                          <p className="content">
                          El calzado deportivo o zapatillas de deporte es un tipo de calzado que se utiliza para realizar distintos tipos de deporte. Generalmente posee un cuerpo fabricado en piel, lona y/o materiales sintéticos, y una suela de gamo que ofrece una mayor adherencia, así como flexibilidad.
                          <br />
                          El calzado deportivo recibe diversas denominaciones de acuerdo al país, entre ellas: tenis, zapatillas, zapatos deportivos, zapatillas de deporte, botines, bambas, deportivos o deportivas, zapatos de gamo, playeros o playeras.
                          </p>
                        <button className="btn btn-primary">Sigan Viendo</button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__content">
                        <h4 className="testimonial__heading">Haz brillar tu escencia</h4>
                          <p className="content">
                          La esencia del deporte es aquello que nos hace sentir, sentir que estamos vivos. Lo que te hace seguir día a día.
                          Muchos de nosotros no firmamos autógrafos, no nos paran para hecerse fotos con nosotros, no nos llaman por la calle… Pero aún así seguimos, no dejamos de entrenar, de trabajar, de luchar por nuestros RETOS, nuestros SUEÑOS!!
                          </p>
                        <button className="btn btn-primary">Sigan Viendo</button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
