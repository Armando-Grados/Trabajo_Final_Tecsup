import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import MenuHamburger from "../Menu/MenuHamburger";

const Header = () => {


  return (
    <header className="header">
      <nav className="nav">
        <div className="container container--headed">
          <Link to="/" className="nav__link-logo-container">
            <figure className="nav__link-logo" height="65" width="84">
              <Logo />
            </figure>
          </Link >
          <MenuHamburger />
        </div>
      </nav>
    </header>
  );
}

export default Header;