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
              Статти
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__item--link" to="/info">
              Информация
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__item--link" to="/reviews">
              Отзывы
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Все права защищены</p>
      </footer>
    </>
  );
};

export default Layout;
