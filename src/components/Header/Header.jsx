import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";
import { NavItem, NavList } from "../Nav";
import logo from "../../assets/images/logo.png"

import "./Header.style.scss"


const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="header-content">
                <Logo src={logo} />
                <NavList>
                    <NavItem to={"/"}>Home</NavItem>
                    <NavItem to={"/about"}>About</NavItem>
                    <NavItem to={"/blog"}>Blog&News</NavItem>
                    <NavItem to={"/contact"}>Contact</NavItem>
                </NavList >
                <NavLink to={"/Acount"}>Acount</NavLink>
            </div>
        </div>
    </header>
  );
};

export default Header;
