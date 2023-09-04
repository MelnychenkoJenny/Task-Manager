import { useSelector } from 'react-redux';
import {
  selectBoards,
  selectBoardById,
  selectColumns,
  selectIsLoading,
  selectError,
 /* selectTasks,*/
} from 'redux/board/boardSelectors';

export const useBoards = () => {
  const allBoards = useSelector(selectBoards);
  const boardById = useSelector(selectBoardById);
  const columns = useSelector(selectColumns);
  // const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    allBoards,
    boardById,
    columns,
    isLoading,
    error,
    // tasks,
  };
};
// import { useBoards } from 'hooks';
// const { allBoards, boardById, columns,isLoading,error, tasks } = useBoards();
