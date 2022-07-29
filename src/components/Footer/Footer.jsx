import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <footer className="padding-block-700 bg-neutral-900 text-neutral-100">
      <div className="wrapper">
        <div className="even-columns">
          <div>
            <img src={logo} alt="logo" />
            <ul aria-label="social links" role="list">
              <li>
                <a aria-label="facebook" href="#"></a>
              </li>
              <li>
                <a aria-label="youtube" href="#"></a>
              </li>
              <li>
                <a aria-label="twitter" href="#"></a>
              </li>
              <li>
                <a aria-label="pinterest" href="#"></a>
              </li>
              <li>
                <a aria-label="instagram" href="#"></a>
              </li>
            </ul>
          </div>
          <div>
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
          <div>
            <form>
              <input type="email" placeholder="Updates in your inbox…" />
              <button className="button">Go</button>
            </form>
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
