import { ReactComponent as IconMenu } from '../../assets/svg/menu-ball.svg';

const MenuHamburger = () => {

  const nav = document.querySelector('.nav')
  const header = document.querySelector('.header');

  const menuHamburger = () => {
    console.log(nav);
    nav.classList.toggle('nav--menu-open');
    header.classList.add('bg-black');
  };

  const headerColorMenuOpen = () => {
    if (!nav.classList.contains('nav--menu-open')) {
      header.classList.remove('bg-black');
    }
  };
  return (
    <>
      <div
        className="menu__icon"
        onClick={() =>
          menuHamburger()
        }
      >
        <IconMenu />
      </div>
      <ul
        className="menu menu--hamburger"
        onTransitionEnd={() => {
          headerColorMenuOpen();
        }}
      >
        <li>
          <a href="#iSkills" className="menu__link">INICIO</a>
        </li>
        <li>
          <a href="#iExperience" className="menu__link">SEASON</a>
        </li>
        <li>
          <a href="/" className="menu__link">ULTIMOS CALZADOS</a>
        </li>
        <li>
          <a href="#iContact" className="menu__link">RESEÑAS</a>
        </li>
      </ul>
    </>
  );
}

export default MenuHamburger;