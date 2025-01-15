import { Link } from 'react-router';
import styles from './NotFoundBlock.module.css';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <p>Страница не найдена</p>
      <Link to='/' className={styles.homeLink}>
        Вернуться на главную
      </Link>
    </div>
  );
};
export default NotFoundBlock;
