import { NavLink } from "react-router-dom";

const Logo = (props) => {
  return (
	<NavLink to="/" className='logo'>
		<img src={props.src} alt='logo' />
	</NavLink>
  )
}

export default Logo;