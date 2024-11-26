import React from "react";
import "./Header.css";
import HeaderLink from "./HeaderLink";
import { assets } from "../../assets/images/assets";
import { Link } from "react-router-dom";
// import menu from "../../commonResource/images/icons/menu-vector-icon.jpg";
// import logo from "../../commonResource/images/icons/logo-sm.png";
// import search from "../../commonResource/images/icons/search-icon-sm.png";
// import cart from "../../commonResource/images/icons/cart-sm.png";

const Header = () => {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <div
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <img className="menu-open" src={assets.menu} alt=""></img>
            </div>
            <Link className="navbar-brand mx-auto" to="/">
              <img className="menu-open" src={assets.logo}></img>
            </Link>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderLink linkName="Mac" name="Mac" />
                <HeaderLink linkName="iphone" name="iphone" />
                <HeaderLink linkName="ipad" name="ipad" />
                <HeaderLink linkName="watch" name="Watch" />
                <HeaderLink linkName="tv" name="tv" />
                <HeaderLink linkName="music" name="Music" />
                <HeaderLink linkName="support" name="Support" />
                <HeaderLink
                  linkName="/"
                  name={<img src={assets.search}></img>}
                />
                <HeaderLink
                  linkName="/cart/"
                  name={<img src={assets.cart}></img>}
                />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
