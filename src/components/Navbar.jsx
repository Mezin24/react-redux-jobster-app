import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toggleSidebar, userLogout } from '../features/userSlice';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='toggle-btn'
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={`dropdown ${showDropdown ? 'show-dropdown' : ''}`}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => {
                dispatch(userLogout());
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
