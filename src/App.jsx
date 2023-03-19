import { Lading, Register, Dashboard, ErrorPage } from './pages/';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Lading />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
export default App;
