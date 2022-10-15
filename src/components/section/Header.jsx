import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import MenuHamburger from "../Menu/MenuHamburger";

const Header = () => {


  return (
    <header className="header">
      <nav className="nav">
        <div className="container container--headed">
          <a href="/" className="nav__link-logo-container">
            <figure className="nav__link-logo" height="65" width="84">
              <Logo />
            </figure>
          </a>
          <MenuHamburger />
        </div>
      </nav>
    </header>
  );
}

export default Header;