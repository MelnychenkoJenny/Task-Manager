import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBoards, getBoardById } from 'redux/board/boardOperations';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const dispatch = useDispatch();
  const { boardName } = useParams();

  useEffect(() => {
    dispatch(getAllBoards());
    dispatch(getBoardById(boardName));
  }, [boardName, dispatch]);

  return (
    <section>
      <MainDashboard />
    </section>
  );
};
export default ScreensPage;
