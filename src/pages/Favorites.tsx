import { useSelector } from 'react-redux';
import CatBlock from '../components/CatBlock';
import { selectCatData } from '../redux/cat/selectors';

const Favorites = () => {
  const { cats } = useSelector(selectCatData);

  const likedCats = cats.filter((cat) => cat.liked);

  return (
    <>
      {likedCats.length === 0 ? (
        <div className='content-notice'>
          <h2>Нет лайкнутых котиков</h2>
          <p>Попробуйте добавить котиков в избранное!</p>
        </div>
      ) : (
        <div className='grid-container'>
          {likedCats.map((cat) => (
            <CatBlock key={cat.id} {...cat} />
          ))}
        </div>
      )}
    </>
  );
};
export default Favorites;
