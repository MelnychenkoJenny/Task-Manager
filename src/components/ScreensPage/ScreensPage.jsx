// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getAllBoards, getBoardById } from 'redux/board/boardOperations';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
// import { useParams } from 'react-router-dom';
// import { useAuth, useBoards } from 'hooks';
// import Loader from 'components/Loader/Loader';

const ScreensPage = () => {
  // const dispatch = useDispatch();
  // const { boardName } = useParams();
  // const { isLoading } = useBoards();
  // const { loading } = useAuth();

  // useEffect(() => {
  //   dispatch(getAllBoards());
  //   dispatch(getBoardById(boardName));
  // }, [boardName, dispatch]);

  return (
    
    <>
    
      <section>
        <MainDashboard />
      </section>
    </>
  );
};
export default ScreensPage;
