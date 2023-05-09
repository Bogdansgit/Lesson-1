import "./NavList.style.scss"

const NavList = ({children, orientation}) => {

    const navStyle = orientation === 'vertical' ? 'vertical' : 'horizontal';

  return (
      <nav className='nav'>
          <ul className={navStyle} >
              {children}
          </ul>
      </nav>
  );
}

export default NavList;