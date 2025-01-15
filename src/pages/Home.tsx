import { useSelector } from 'react-redux';
import { selectCatData } from '../redux/cat/selectors';
import { fetchCats } from '../redux/cat/asyncActions';
import { useEffect } from 'react';
import CatBlock from '../components/CatBlock';
import { Cat } from '../redux/cat/types';
import { useAppDispatch } from '../redux/store';
import Skeleton from '../components/CatBlock/Skeleton';

const Home = () => {
  const dispatch = useAppDispatch();
  const { cats, status } = useSelector(selectCatData);

  useEffect(() => {
    dispatch(fetchCats({ limit: 15, page: 1 }));
  }, [dispatch]);

  const skeletons = [...Array(5)].map((_, index) => <Skeleton key={index} />);
  const loadedCats = cats.map((cat: Cat) => <CatBlock key={cat.id} {...cat} />);

  return (
    <div>
      {status === 'error' ? (
        <div className='content-error'>
          <h2>Произошла ошибка</h2>
          <p>
            К сожалению, не удалось получить котиков. Попробуйте повторить
            попытку позже.
          </p>
        </div>
      ) : (
        <div className='grid-container'>
          {status === 'loading' ? skeletons : loadedCats}
        </div>
      )}
    </div>
  );
};
export default Home;
