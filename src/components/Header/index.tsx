import { Link } from 'react-router';

const Header: React.FC = () => {
  return (
    <>
      <Link to='/'>Все котики</Link>
      <Link to='/favorites'>Любимые котики</Link>
    </>
  );
};
export default Header;
