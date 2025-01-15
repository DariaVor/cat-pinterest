import { NavLink } from 'react-router';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <NavLink
        to='/cat-pinterest/'
        end
        className={({ isActive }) =>
          `${styles.linkButton} ${isActive ? styles.active : ''}`
        }
      >
        Все котики
      </NavLink>
      <NavLink
        to='/cat-pinterest/favorites'
        className={({ isActive }) =>
          `${styles.linkButton} ${isActive ? styles.active : ''}`
        }
      >
        Любимые котики
      </NavLink>
    </div>
  );
};

export default Header;
