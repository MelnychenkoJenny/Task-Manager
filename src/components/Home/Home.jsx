import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from 'styles/index.module.scss';
import { getAllBoards } from 'redux/board/boardOperations';
import { selectBoards } from 'redux/board/boardSelectors';
import AddBoard from './testAddBoard';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  const allBoards = useSelector(selectBoards);
  console.log(allBoards);
  return (
    <section className={styles.AfWelcomReg}>
      <div className={styles.AfWelcomRegWr}>
        <h1>Task component</h1>
        <AddBoard />
      </div>
    </section>
  );
};
export default Home;
