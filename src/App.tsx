import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/cat-pinterest/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
