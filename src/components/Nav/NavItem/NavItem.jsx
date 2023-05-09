import { NavLink } from "react-router-dom";

import "./NavItem.style.scss"

const NavItem = (props) => {
  return (
      <li className="nav-item">
          <NavLink className='nav-link' to={props.to}>{props.children}</NavLink>
      </li>
  );
}

export default NavItem;
