import { NavItem, NavList } from "../Nav";
import logo from "../../assets/images/logo-footer.png"
import Logo from "../Logo/Logo";
import heartIcon from "../../assets/images/img-02.svg"

import "./Footer.style.scss"

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
	<footer className="footer">
    <div className="container">
      <div className="footer-columns">
        <div className="f-col">
          <Logo src={logo} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem
          </p>
        </div>
        <div className="f-col">
          <div className="footer-item">
            <h5>Service</h5>
            <NavList orientation={'vertical'}>
              <NavItem url='#'>Domain</NavItem>
              <NavItem url='#'>Shared Hosting</NavItem>
              <NavItem url='#'>Cloud Hosting</NavItem>
              <NavItem url='#'>Private Hosting</NavItem>
            </NavList >
          </div>
        </div>
        <div className="f-col">
          <div className="footer-item">
            <h5>Hosting</h5>
            <NavList orientation={'vertical'}>
              <NavItem url='#'>Cheap Hosting</NavItem>
              <NavItem url='#'>Hosting Wordpress</NavItem>
              <NavItem url='#'>Email Hosting</NavItem>
              <NavItem url='#'>Hosting Unlimited</NavItem>
            </NavList >
          </div>
        </div>
        <div className="f-col">
          <div className="footer-item">
            <h5>Company</h5>
            <NavList orientation={'vertical'}>
              <NavItem url='#'>About</NavItem>
              <NavItem url='#'>Career</NavItem>
              <NavItem url='#'>Contact Us</NavItem>
            </NavList >
          </div>
        </div>
        <div className="f-col">
          <div className="footer-item">
            <h5>Help</h5>
            <NavList orientation={'vertical'}>
              <NavItem url='#'>FAQ</NavItem>
              <NavItem url='#'>Help support</NavItem>
            </NavList >
          </div>
        </div>
      </div>
      <div className="copiright">
        <p>
          Built by Jeremiah with <img src={heartIcon} className="icon" alt="HeartIcon" /> love in Lagos. Copyright {currentYear}
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer;