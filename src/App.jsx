import { Lading, Register, Dashboard, ErrorPage } from './pages/';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Lading />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer position='top-center' autoClose={3000} />
    </>
  );
};
export default App;
