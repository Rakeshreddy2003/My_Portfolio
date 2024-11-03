import React, { useState } from 'react';
import '../css/header.css'
import "../../src/App.css"

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Rakesh's Portfolio
        </a>

        {/* Toggle Class for Menu */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list  nav_item_padding">
            <li className="nav__item ">
              <a href="#home" className="nav__link active-link nav_hover">
                <i className="uil uil-house-user nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link nav_hover">
                <i className="uil uil-user-md  nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link nav_hover">
                <i className="uil uil-book-reader nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="https://drive.google.com/file/d/1okwz0vXS0v4NLY-oSjM606WRjC3uwZzN/view?usp=sharing" className="nav__link nav_hover" target='main'>
                <i className="uil uil-postcard  nav__icon"></i> Resume
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link nav_hover">
              <i className="uil uil-books nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link nav_hover">
              <i className="bi bi-telephone nav__icon"></i> contact
              </a>
            </li>
          </ul>

          {/* Close Menu Icon */}
          <i
            className="uil uil-times nav__close"
            onClick={() => {
              showMenu(false);  // Explicitly set to false to close the menu
            }}
          ></i>
        </div>

        {/* Toggle Button for Opening Menu */}
        <div
          className="nav__toggle"
          onClick={() => {
            showMenu(!Toggle);  // Toggling menu state
          }}
        >
          <i className={!Toggle ? "uil uil-apps": "" } id='header_toggle'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
