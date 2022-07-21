import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <>
      <header className="primary-header">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Manage" />
          </Link>
          <nav className="primary-navigation">
            <ul className="nav-list" aria-label="primary" role="list">
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Product</Link>
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
            </ul>
            <button className="button">Get Started</button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
