import { useEffect } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { getAllBoards, getBoardById } from 'redux/board/boardOperations';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { useParams } from 'react-router-dom';
// import EditProfile from 'components/EditProfile/EditProfile';
// import { useAuth } from 'hooks'; // s
// import AddBoard from './testAddBoard';
// import { AddCard } from 'components/AddCard';
// import { Card } from 'components/Card';
// import NewBoard from 'components/ModalBoard/NewBoard';
// import { PopColumn } from 'components/PopColumn';


const ScreensPage = () => {
  const dispatch = useDispatch();
  const {boardName} = useParams()
  // console.log('idBoard :>> ', boardName);
  //   const { user } = useAuth();
  //   console.log(user)
  useEffect(() => {
    dispatch(getAllBoards());
    dispatch(getBoardById(boardName));
  }, [boardName, dispatch]);

  return (
    <section>
      <MainDashboard />
      {/* <EditProfile/> */}
      {/* <AddBoard /> */}
      {/* <AddCard /> */}
      {/* <Card /> */}
      {/* <NewBoard /> */}
      {/* <PopColumn /> */}
    </section>
  );
};
//   return (
//     <section className={styles.YMScreenReg}>
//       <div className={styles.AfWelcomRegWr}>
//         <MainDashboard />
//         {/* <EditProfile/> */}
//         <AddBoard />
//         {/* <AddCard /> */}
//         {/* <Card /> */}
//         {/* <NewBoard /> */}
//         {/* <PopColumn /> */}
//       </div>
//     </section>
//   );
// };
export default ScreensPage;
