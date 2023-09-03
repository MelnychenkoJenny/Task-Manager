import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import styles from 'styles/index.module.scss';
import { getAllBoards } from 'redux/board/boardOperations';
// import { MainDashboard } from 'components/MainDashboard/MainDashboard';
// import EditProfile from 'components/EditProfile/EditProfile';
// import { useAuth } from 'hooks';
import AddBoard from './testAddBoard';

// import { AddCard } from 'components/AddCard';
// import { Card } from 'components/Card';
// import NewBoard from 'components/ModalBoard/NewBoard';
// import { PopColumn } from 'components/PopColumn';

const ScreensPage = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();
  // console.log(user)
  const statE = useSelector(state=>state)
  console.log(statE)
  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);


  return (
    <section className={styles.YMScreenReg}>
      <div
        className={styles.AfWelcomRegWr}
      >
        {/* <MainDashboard /> */}
        {/* <EditProfile/> */}
        <AddBoard />
        {/* <AddCard /> */}
        {/* <Card /> */}
        {/* <NewBoard /> */}
        {/* <PopColumn /> */}
      </div>
    </section>
  );
};
export default ScreensPage;
