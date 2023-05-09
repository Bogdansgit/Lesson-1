import { Link } from "react-router-dom";

import "./Button.style.scss";

function Button({children, variant, ...props}) {

  const btnStyle = variant === 'red' ? 'btn red' : 'btn dark';

  return (
    <>
      <Link to={props.link} className={btnStyle}>{children}</Link>
  </>
  )
}

export default Button;