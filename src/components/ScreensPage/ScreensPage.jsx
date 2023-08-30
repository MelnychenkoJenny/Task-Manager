import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from 'styles/index.module.scss';
import { getAllBoards } from 'redux/board/boardOperations';

import AddBoard from './testAddBoard';


import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { AddCard } from 'components/AddCard';
import { Card } from 'components/Card'

const ScreensPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  return (
    <section className={styles.AfWelcomReg} >
      <div className={styles.AfWelcomRegWr} style={{display: 'flex', flexWrap: 'wrap'}}>

        <AddBoard />
        <MainDashboard />
        <AddCard />
        <Card />
      </div>
    </section>
  );
};
export default ScreensPage;