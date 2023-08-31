import Error from 'components/Error/Error';
import AddBoard from 'components/ScreensPage/testAddBoard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBoards } from 'redux/board/boardOperations';

const NotFound = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  return (
    <>
      <Error />
      <AddBoard />
    </>
  );
};
export default NotFound;
