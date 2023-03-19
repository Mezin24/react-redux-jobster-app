import { Link } from 'react-router-dom';
import img from '../assets/images/error.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const ErrorPage = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='404 status' />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};
export default ErrorPage;
