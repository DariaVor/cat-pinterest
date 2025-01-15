import { useSelector } from "react-redux"
import { selectCatData } from "../redux/cat/selectors";
import { fetchCats } from "../redux/cat/asyncActions";
import { useEffect } from "react";
import CatBlock from "../components/CatBlock";
import { Cat } from "../redux/cat/types";
import { useAppDispatch } from "../redux/store";

const Home = () => {

  const dispatch = useAppDispatch()
  const { cats, status } = useSelector(selectCatData);

  useEffect(() => {
    dispatch(fetchCats({ limit: 2, page: 1 }));
  }, [dispatch])

  const loadedCats = cats.map((cat: Cat) => (
    <CatBlock key={cat.id} {...cat} />
  ));

  return (
    <div>{loadedCats}</div>
  )
}
export default Home