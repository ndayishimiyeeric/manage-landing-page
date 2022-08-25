import { Link } from 'react-router-dom';
import { useState } from 'react';
// import './nav';
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/icon-hamburger.svg';
import close from '../../assets/icon-close.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    const primaryHeader =
      e.target.parentElement.parentElement.parentElement.parentElement;
    primaryHeader.toggleAttribute('data-overlay');
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="primary-header">
        <div className="wrapper navbar navbar-expand-lg">
          <div className="nav-wrapper container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Manage" />
            </Link>
            <button
              className="mobile-nav-toggle navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#primary-navigation"
              aria-controls="primary-navigation"
              aria-expanded="false"
              onClick={handleClick}
            >
              <span className="visually-hidden">Menu</span>
              {!isOpen ? (
                <img
                  className="icon-hamburger"
                  src={hamburger}
                  alt=""
                  aria-hidden="true"
                />
              ) : (
                <img
                  className="icon-close"
                  src={close}
                  alt=""
                  aria-hidden="true"
                />
              )}
            </button>
            <nav className="primary-navigation" id="primary-navigation">
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
            </nav>
            <button className="button | hide-sm">Get Started</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
