import { useSelector } from 'react-redux';
import { selectCatData } from '../redux/cat/selectors';
import { fetchCats } from '../redux/cat/asyncActions';
import { useEffect, useRef, useCallback } from 'react';
import CatBlock from '../components/CatBlock';
import { Cat } from '../redux/cat/types';
import { useAppDispatch } from '../redux/store';
import Skeleton from '../components/CatBlock/Skeleton';

const Home = () => {
  const dispatch = useAppDispatch();
  const { cats, status } = useSelector(selectCatData);

  const pageRef = useRef(1);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    dispatch(fetchCats({ limit: 15, page: 1 }));
  }, [dispatch]);

  const loadMoreCats = useCallback(() => {
    pageRef.current += 1;
    dispatch(fetchCats({ limit: 15, page: pageRef.current }));
  }, [dispatch]);

  const lastCatRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (status === 'loading') return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMoreCats();
          }
        },
        { threshold: 1.0, rootMargin: '50px' }
      );

      if (node) observer.current.observe(node);
    },
    [loadMoreCats, status]
  );

  const skeletons = [...Array(10)].map((_, index) => <Skeleton key={index} />);
  const loadedCats = cats.map((cat: Cat, index) => {
    if (index === cats.length - 1) {
      return (
        <div ref={lastCatRef} key={cat.id}>
          <CatBlock {...cat} />
        </div>
      );
    }
    return <CatBlock key={cat.id} {...cat} />;
  });

  return (
    <div>
      {status === 'error' ? (
        <div className="content-error">
          <h2>Произошла ошибка</h2>
          <p>
            К сожалению, не удалось получить котиков. Попробуйте повторить попытку позже.
          </p>
        </div>
      ) : (
        <div className="grid-container">
          {status === 'loading' && cats.length === 0
            ? skeletons
            : loadedCats}
        </div>
      )}
      {status === 'loading' && cats.length > 0 && (
        <div className="loading-indicator">... загружаем еще котиков ...</div>
      )}
    </div>
  );
};

export default Home;
