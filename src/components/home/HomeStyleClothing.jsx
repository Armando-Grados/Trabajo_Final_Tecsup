import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const HomeStyleClothing = () => {
  return (
    <section className="section-body">
      <div className="container-galeria container-galeria--elements">
        <Swiper
          modules={[Navigation]}
          // centeredSlides="true"
          slidesPerView={1}
          speed={2000}
          navigation
          breakpoints={{
            1280: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1
            }
          }}
          style={{
            width: '100%'
          }}
        >
          <SwiperSlide>
            <div className="contenedor">
              <div className="capa" id="capa1">
                <h3 className='capa-title'>CIUDAD DE SUEÑOS</h3>
                <a href="/" className="button button--sl">COMPRAR AHORA</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="contenedor-2">
              <div className="capa" id="capa1">
                <h3 className='capa-title'>LISTO PARA EL INVIERNO</h3>
                <a href="/" className="button button--sl">COMPRAR AHORA</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="contenedor-3">
              <div className="capa" id="capa1">
                <h3 className='capa-title'>CONMEMORATIVO</h3>
                <a href="/" className="button button--sl">COMPRAR AHORA</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="contenedor-4">
              <div className="capa" id="capa1">
                <h3 className='capa-title'>LADO A LADO</h3>
                <a href="/" className="button button--sl">COMPRAR AHORA</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HomeStyleClothing;