// import { ReactComponent as Logo } from '../../assets/svg/logo-footer.svg';
import { ReactComponent as Adidas } from '../../assets/svg/marcas/adidas-logo.svg';
import { ReactComponent as Nike } from '../../assets/svg/marcas/nike-logo.svg';
import { ReactComponent as Puma } from '../../assets/svg/marcas/puma-logo.svg';
import { ReactComponent as Jordan } from '../../assets/svg/marcas/jordan-logo.svg';
import { Link } from 'react-router-dom';


const Footer = () => {

  const menuItems = ['INICIO', 'SEASON', 'NOVEDADES', 'RESEÑAS', 'TIENDA']
  const menuRedes = ['FACEBOOK', 'TWITTER', 'INSTAGRAM', 'WHATSAPP', 'TIKTOKS']
  const menuTalents = ['RICHARD', 'ARMANDO', 'RUDY']
  return (
    <footer className="footer">
      <nav className="nav">
        <div className="container container--footer">
          <div className='footer__message'>
            <span className='footer__title'>PORQUE</span>
            <span className='footer__title'>AMAMOS</span>
            <span className='footer__title'>VERTE</span>
            <span className='footer__title'>BIEN</span>
          </div>
          <div className='footer__lists'>
            <div>
              <h2>WOLFSPORT</h2>
              <ul
                className='menu__items menu__items--footer'>
                {menuItems.map((element, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href="#iSkills"
                        className="menu__link menu__link--footer">
                        {element.split('').map((element, index) => {
                          let letter = element === ' ' ? '&nbsp;' : element;
                          return (
                            <div key={index} className='menu__letter-container' style={{ '--delay': `${0.03 * index}s` }}>
                              <span>{letter}</span>
                              <span className='menu__letter'>{letter}</span>
                            </div>
                          )
                        })}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h2>SIGUENOS</h2>
              <ul className='menu__items menu__items--footer'>
                {menuRedes.map((element, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href="#iSkills"
                        className="menu__link menu__link--footer">
                        {element.split('').map((element, index) => {
                          let letter = element === ' ' ? '&nbsp;' : element;
                          return (
                            <div key={index} className='menu__letter-container' style={{ '--delay': `${0.03 * index}s` }}>
                              <span>{letter}</span>
                              <span className='menu__letter'>{letter}</span>
                            </div>
                          )
                        })}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h2>TALENTOS</h2>
              <ul className='menu__items menu__items--footer'>
                {menuTalents.map((element, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href="#iSkills"
                        className="menu__link menu__link--footer">
                        {element.split('').map((element, index) => {
                          let letter = element === ' ' ? '&nbsp;' : element;
                          return (
                            <div key={index} className='menu__letter-container' style={{ '--delay': `${0.03 * index}s` }}>
                              <span>{letter}</span>
                              <span className='menu__letter'>{letter}</span>
                            </div>
                          )
                        })}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='footer__credits'>
            <div className='footer__by'>
              <h3 className='footer__subtitle'>Alta Calidad Garantizado por</h3>
              <h4 className='footer__subtitle footer__subtitle--big'>BCMP CODIGO BY TECSUP</h4>
            </div>
            <div className='footer__marcas'>
              <Adidas />
              <Nike />
              <Puma />
              <Jordan />
            </div>
            <div className='footer__copy'>
              <h3 className='footer__subtitle'>&copy; 2022 FoxSport. All rights reserved</h3>
              <h4 className='footer__subtitle footer__subtitle--big'>Imagenes e impresiones artisticas</h4>
            </div>
          </div>
          <div className='footer__slide-container'>
            <div className='footer__slide'>
              <h3 className='footer__subtitle footer__subtitle--slide'>Ubicacion : Jr. Miró Quesada N.º 179‑185. Lima- Perú</h3>
              <h3 className='footer__subtitle footer__subtitle--slide'>Correo : ventas@ventas.wolfsport.com</h3>
              <h3 className='footer__subtitle footer__subtitle--slide'>Telefonos : 925 856987 / 0800-012023</h3>
              <h3 className='footer__subtitle footer__subtitle--slide'>Ubicacion : Jr. Miró Quesada N.º 179‑185. Lima- Perú</h3>
              <h3 className='footer__subtitle footer__subtitle--slide'>Correo : ventas@ventas.wolfsport.com</h3>
              <h3 className='footer__subtitle footer__subtitle--slide'>Telefonos : 925 856987 / 0800-012023g</h3>
              <h3 className='footer__subtitle footer__subtitle--slide'>Ubicacion : Jr. Miró Quesada N.º 179‑185. Lima- Perú</h3>
              <h3 className='footer__subtitle footer__subtitle--slide'>Correo : ventas@ventas.wolfsport.com</h3>
              <h3 className='footer__subtitle footer__subtitle--slide'>Telefonos : 925 856987 / 0800-012023g</h3>
            </div>
          </div>
        </div>
      </nav>
    </footer >
  );
}

export default Footer;