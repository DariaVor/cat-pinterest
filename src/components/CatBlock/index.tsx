import { toggleLike } from '../../redux/cat/slice';
import { useAppDispatch } from '../../redux/store';
import styles from './CatBlock.module.css';
import heartFilled from '../../assets/heart_filled.svg';
import heartOutline from '../../assets/heart_outline.svg';

type CatBlockProps = {
  id: string;
  url: string;
  liked?: boolean;
};

const CatBlock: React.FC<CatBlockProps> = ({ id, url, liked }) => {
  const dispatch = useAppDispatch();

  const handleLike = () => {
    dispatch(toggleLike(id));
  };

  return (
    <div className={styles.root}>
      <img src={url} alt='Кот' />
      <button className={styles.heartButton} onClick={handleLike}>
        {liked ? (
          <img
            src={heartFilled}
            alt='Лайкнуто'
            className={styles.heartFilled}
          />
        ) : (
          <img
            src={heartOutline}
            alt='Не лайкнуто'
            className={styles.heartOutline}
          />
        )}
      </button>
    </div>
  );
};
export default CatBlock;
