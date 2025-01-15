import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default MainLayout;
