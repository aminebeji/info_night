import { Link, animateScroll as scroll } from "react-scroll";

function HeaderComponent() {
  return (
    <div className="header__title">
      <h1 style={{ color: "rgb(168, 57, 57)" }}>SIDA/VIH</h1>
      <h1>
        OUI à <span className="highlight">l'information</span> et
        <br /> à la <span className="highlight">Prévention</span>
        <br />
      </h1>
      <h4>
        Aujourd’hui, l’espérance de vie d’une personne vivant avec le VIH se
        rapproche de plus en plus de celle d’une personne non infectée.
      </h4>
      <Link
        className="btn--text btn--scroll-to"
        to="section--1"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
      >
        En savoir plus
      </Link>
      <img
        src="img/hero.png"
        className="header__img"
        alt="Minimalist bank items"
      />
    </div>
  );
}

export default HeaderComponent;
