import { NavLink } from 'react-router-dom';
import links from '../utils/links';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <nav className='nav-links'>
      {links.map((navLink) => (
        <NavLink
          to={navLink.path}
          className='nav-link'
          key={navLink.id}
          onClick={toggleSidebar}
        >
          <span className='icon'> {navLink.icon}</span> {navLink.text}
        </NavLink>
      ))}
    </nav>
  );
};
export default NavLinks;
