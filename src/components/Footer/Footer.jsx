import { Link } from 'react-router-dom';
import socialIcons from '../../assets/social-icons.svg';
import footerLogo from '../../assets/footer-logo.svg';

function Footer() {
  return (
    <footer className="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100">
      <div className="wrapper">
        <div className="primary-footer-wrapper">
          <div className="primary-footer-logo-social">
            <a href="#">
              <svg class="logo" width="146" height="24">
                <use xlinkHref={`${footerLogo}#logo`}></use>
              </svg>
            </a>
            <ul className="social-list" aria-label="social links" role="list">
              <li>
                <a aria-label="facebook" href="#">
                  <svg class="social-icon">
                    <use xlinkHref={`${socialIcons}#icon-facebook`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="youtube" href="#">
                  <svg class="social-icon">
                    <use xlinkHref={`${socialIcons}#icon-youtube`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="twitter" href="#">
                  <svg class="social-icon">
                    <use xlinkHref={`${socialIcons}#icon-twitter`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="pinterest" href="#">
                  <svg class="social-icon">
                    <use xlinkHref={`${socialIcons}#icon-pinterest`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a aria-label="instagram" href="#">
                  <svg class="social-icon">
                    <use xlinkHref={`${socialIcons}#icon-instagram`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="primary-footer-nav">
            <nav className="footer-nav">
              <ul
                className="flow"
                style={{ '--flow-spacer': '1em' }}
                aria-label="footer"
                role="list"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/">Products</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Community</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="primary-footer-form">
            <form>
              <input type="email" placeholder="Updates in your inbox…" />
              <button data-shadow="none" className="button">
                Go
              </button>
            </form>
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
