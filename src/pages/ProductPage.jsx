import imgWhite from '../assets/img/prueba/img-white-300.png'
import imgBlack from '../assets/img/prueba/img-black-300.png'
import { ReactComponent as Star } from '../assets/svg/star2.svg';
import { ReactComponent as Heart } from '../assets/svg/heart.svg';
import { useRef } from 'react';

const ProductPage = () => {
  const imgMag = useRef()
  const magnifyingImg = (e) => {
    const { top: t, left: l } = imgMag.current.getBoundingClientRect();
    let posMouseY = e.clientY - t + 1;
    let posMouseX = e.clientX - l + 1;
    imgMag.current.style.backgroundPosition = `${posMouseX * 100 / 500}% ${posMouseY * 100 / 390}%`;
  };

  return (
    <section className="section section--product">
      <div className="container container--product">
        <div
          ref={imgMag}
          className="product__img"
          onMouseMove={magnifyingImg}></div>
        <div className="card">
          <div className="card__header">
            <div className='card__value'>
              <div className='card__stars'>
                <Star className='card__star' />
                <Star className='card__star' />
                <Star className='card__star' />
                <Star className='card__star' />
                <Star className='card__star' />
              </div>
              <h3 className='card__text'>(5 de 5 estrellas)</h3>
            </div>
            <div className='card__like'>
              <Heart className='card__heart' />
            </div>
          </div>
          <div className="card__body card__body--product">
            <h3 className="card__title card__title--product">Nike Tiempo Legend 9 Academy TF</h3>
            <h3 className="card__subtitle card__subtitle--product">Vela/Marrón Claro Hombre</h3>
            <h3 className="card__text">USD 75</h3>
            <div className='product__description'>
              <p className="card__text">
                Tienes las habilidades, tienes el juego. Ahora presumítelos con los zapatos de fútbol Nike Jr. Las lengüetas para jalar y las correas dobles se combinan para crear un diseño fácil de poner que elimina la necesidad de usar cordones y lo ayuda a estar en la cancha rápidamente. ¿Pero la mejor parte? La amortiguación Zoom Air debajo del talón ayuda a agregar comodidad que rebota durante todo el juego.
              </p>
              <ul className='product__menu'>
                <li>
                  <h2 className="card__subtitle card__subtitle--description">Comodidad acolchada.</h2>
                  <p className="card__text">Enérgica y receptiva, la amortiguación Zoom Air ayuda a proporcionar una sensación rápida de despegue.</p>
                </li>
                <li>
                  <h2 className="card__subtitle card__subtitle--description">Contenga su velocidad</h2>
                  <p className="card__text"> La jaula de velocidad interior está hecha de un material delgado pero fuerte que asegura el pie a la placa sin agregar peso adicional.</p>
                </li>
                <li>
                  <h2 className="card__subtitle card__subtitle--description">Toque para todo clima</h2>
                  <p className="card__text">Un revestimiento NikeSkin ultrafino te acerca al balón para un toque preciso a altas velocidades.</p>
                </li>
                <li>
                  <h2 className="card__subtitle card__subtitle--description">Excavar, despegar</h2>
                  <p className="card__text">Diseñados para superficies naturales y sintéticas, los tacos cónicos ofrecen una tracción supercargada con liberación rápida y giro.</p>
                </li>
                <li>
                  <h2 className="card__subtitle card__subtitle--description">Detalles de producto:</h2>
                  <p className="card__text">Para uso en superficies naturales y sintéticas.
                    Plantilla acolchada</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="card__footer">
            <img src={imgWhite} alt="" className="card__img--type" />
            <img src={imgBlack} alt="" className="card__img--type" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;