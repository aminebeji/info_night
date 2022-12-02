function FooterComponent() {
  return (
    <footer class="footer">
      <ul class="footer__nav">
        <li class="footer__item">
          <a
            class="footer__link"
            href="https://www.facebook.com/profile.php?id=100088489443259"
          >
            Facebook
          </a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="instagram.com/goodfellas_isitcom/">
            Instagram
          </a>
        </li>
        {/* <li class="footer__item">
          <a class="footer__link" href="#">
            game
          </a>
        </li> */}
        <li class="footer__item">
          <a class="footer__link" href="#">
            Privacy Policy
          </a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="mailto:nuit.de.linfo.isitcom@gmail.com">
            Contact Us
          </a>
        </li>
      </ul>
      <img src="img/logo_goodfellas.png" alt="Logo" class="footer__logo" />
      <p class="footer__copyright">
        &copy; Copyright by
        <a
          class="footer__link twitter-link"
          target="_blank"
          href="https://twitter.com/jonasschmedtman"
        >
          {" "}
          GOODFELLAS
        </a>
      </p>
    </footer>
  );
}

export default FooterComponent;
