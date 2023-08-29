import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from 'styles/index.module.scss';
import { getAllBoards } from 'redux/board/boardOperations';
import { selectBoards } from 'redux/board/boardSelectors';

import AddBoard from './testAddBoard';


import { MainDashboard } from 'components/MainDashboard/MainDashboard';

const ScreensPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  const allBoards = useSelector(selectBoards);


  return (
    <section className={styles.AfWelcomReg}>
      <div className={styles.AfWelcomRegWr}>

        <AddBoard />
        <MainDashboard />
      </div>
    </section>
  );
};
export default ScreensPage;