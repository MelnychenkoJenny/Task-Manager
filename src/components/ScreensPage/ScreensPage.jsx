import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from 'styles/index.module.scss';
import { getAllBoards } from 'redux/board/boardOperations';

import AddBoard from './testAddBoard';

import { MainDashboard } from 'components/MainDashboard/MainDashboard';

const ScreensPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  return (
    <section>
      <div>
        <MainDashboard />
      </div>
    </section>
  );
  // return (
  //   <section className={styles.AfWelcomReg}>
  //     <div className={styles.AfWelcomRegWr}>

  //       <AddBoard />
  //       <MainDashboard />
  //     </div>
  //   </section>
  // );
};
export default ScreensPage;
