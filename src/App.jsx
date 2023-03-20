import { Landing, Register, ErrorPage, ProtectedRoute } from './pages/';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AddJobs,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from './pages/dashboard';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='add-jobs' element={<AddJobs />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='landing' element={<Landing />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer position='top-center' autoClose={3000} />
    </>
  );
};
export default App;
