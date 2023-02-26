import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../images/logo.svg";

const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink className="logo disActive" to="/">
          <img className="logo__img" src={logo} alt="logo" />
        </NavLink>
        <ul className="header__items">
          <li className="header__item">
            <NavLink className="header__item--link" to="/">
              Articles
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__item--link" to="/info">
              Information
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__item--link" to="/reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>All rights reserved</p>
      </footer>
    </>
  );
};

export default Layout;
