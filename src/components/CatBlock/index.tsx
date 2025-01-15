import styles from './CatBlock.module.css';

type CatBlockProps = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const CatBlock: React.FC<CatBlockProps> = ({ url }) => {
  return (
    <div className={styles.root}>
      <img src={url} alt='Кот' />
    </div>
  );
};
export default CatBlock;
