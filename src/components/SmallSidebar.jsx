import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';
import Logo from './Logo';
import { NavLinks } from '../components';

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const sidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={`sidebar-container ${isSidebarOpen ? 'show-sidebar' : ''}`}
      >
        <div className='content'>
          <button className='close-btn' onClick={sidebarToggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={sidebarToggle} />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
