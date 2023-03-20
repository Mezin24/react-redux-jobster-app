import { Link } from 'react-router-dom';
import main from '../assets/images/job.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis et,
            ipsa similique in ea illo animi magnam vero, sit architecto quia
            quis? Error, commodi voluptatem. Cumque, laborum quasi id
            praesentium consequatur perspiciatis tempore dolorum sit ipsa rerum
            fuga iusto consequuntur!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};
export default Landing;
