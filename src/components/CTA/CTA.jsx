import elements from "../../assets/images/bg-01.png";
import Button from "../Button/Button";
import whatsAppIcon from "../../assets/images/icon-01.svg";

import "./CTA.style.scss";

function CTA() {

  return <div className="cta">
    <div className="container">
      <div className="content">
        <img src={elements} className="decor" alt="decor" />
        <div className="bg">
          <h1>
            We&apos;re here to make your website awesome.
          </h1>
          <Button variant='red' link={'#'}><img src={whatsAppIcon} alt="" /> Get in touch with us</Button>
        </div>
      </div>
    </div>
  </div>;
}

export default CTA;
