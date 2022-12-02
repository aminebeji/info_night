import { Link, animateScroll as scroll } from "react-scroll";

function NavbarComponent() {
  return (
    <nav className="nav sticky">
      <img
        src="img/logo_sidabell.png"
        alt="Bankist logo"
        className="nav__logo"
        id="logo"
      />
      <ul className="nav__links">
        <li className="nav__item">
          <Link
            className="nav__link"
            to="section--1"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
          >
            SIDA/VIH
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            to="section--2"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
          >
            Prévention
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            to="section--3"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
          >
            Stories
          </Link>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/assistance">
            Assistance
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link nav__link--btn btn--show-modal" href="#">
            Quiz
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
