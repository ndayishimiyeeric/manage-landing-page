import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <footer className="bg-neutral-900 text-accent-100">
      <div className="container">
        <div className="even-colums">
          <div>
            <img src={logo} alt="logo" />
            <ul aria-label="social links">
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
              <ul aria-label="footer">
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
