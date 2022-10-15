import { ReactComponent as IconMenu } from '../../assets/svg/menu-ball.svg';
import { ReactComponent as IconMenuClose } from '../../assets/svg/menu-ball-x.svg';
import { ReactComponent as Wolf } from '../../assets/svg/just-wolf.svg';
import { Link } from 'react-router-dom';

const MenuHamburger = () => {
  const menuItems = [
    {
      texto: 'Inicio',
      delay: { '--delay': '0.0s' },
      ref: '#hero'
    },
    {
      texto: 'Testimonios',
      delay: { '--delay': '0.1s' },
      ref: '#testimonial'
    },
    {
      texto: 'Servicios',
      delay: { '--delay': '0.2s' },
      ref: '#service'
    },
    {
      texto: 'Reseñas',
      delay: { '--delay': '0.3s' },
      ref: '#commends'
    },
    {
      texto: 'Productos',
      delay: { '--delay': '0.4s' },
      ref: '/product'
    },
    {
      texto: 'Tienda',
      delay: { '--delay': '0.4s' },
      ref: '/store'
    },

  ]

  const menuHamburgerOpen = () => {
    const nav = document.querySelector('.nav');
    nav.classList.add('nav--menu-open');
  };
  const menuHamburgerClose = () => {
    const nav = document.querySelector('.nav');
    nav.classList.remove('nav--menu-open');
  };
  return (
    <>
      <div
        className="menu__icon"
        onClick={() =>
          menuHamburgerOpen()}>
        <IconMenu className='menu__ball-svg' />
      </div>
      <div className='menu__door-left'></div>
      <div className='menu__door-right'></div>
      <div className='menu menu--hamburger'>
        <ul
          className='menu__items'>
          {
            menuItems.map((element, index) => {
              return (
                <li key={index}>
                  <Link
                    to={element.ref}
                    className="menu__link"
                    style={element.delay}
                    onClick={menuHamburgerClose}>
                    {element.texto.split('').map((element, index) => {
                      let letter = element === ' ' ? '&nbsp;' : element;
                      return (
                        <div key={index} className='menu__letter-container' style={{ '--delay': `${0.03 * index}s` }}>
                          <span>{letter}</span>
                          <span className='menu__letter'>{letter}</span>
                        </div>
                      )
                    })}</Link>
                </li>)
            })
          }
        </ul>
        <div className='menu__close-container'>
          <IconMenuClose
            className='menu__icon-close'
            onClick={() => menuHamburgerClose()} />
        </div>
        <div className='menu menu--footer' style={{ '--delay': '0.5s' }}>
          <Wolf className='menu__icon-wolf' />
          <div>
            <h3 className='menu__title'>Equipo de Venta</h3>
            <h4 className='menu__subtitle'>Richar Osorio - 925326596</h4>
            <h4 className='menu__subtitle'>Armando - 925326596</h4>
            <h4 className='menu__subtitle'>Rudy Mendoza - 925326514</h4>
          </div>
          <div>
            <h4 className='menu__subtitle'>Jr. Miró Quesada N.º 179‑185</h4>
            <h4 className='menu__subtitle'>Lima - Perú</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuHamburger;