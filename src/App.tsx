import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Likes from './pages/Likes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/likes' element={<Likes />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
