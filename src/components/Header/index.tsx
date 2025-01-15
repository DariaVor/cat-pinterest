import { NavLink } from 'react-router';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <NavLink
        to='/'
        className={({ isActive }) =>
          `${styles.linkButton} ${isActive ? styles.active : ''}`
        }
      >
        Все котики
      </NavLink>
      <NavLink
        to='/favorites'
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
