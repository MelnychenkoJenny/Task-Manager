import { useSelector } from 'react-redux';
import {
  selectBoards,
  selectBoardById,
  selectColumns,
  selectIsLoading,
  selectError,
} from 'redux/board/boardSelectors';
import { selectPriorityFilter } from 'redux/filter/filterSelectors';

export const useBoards = () => {
  const allBoards = useSelector(selectBoards);
  const boardById = useSelector(selectBoardById);
  const columns = useSelector(selectColumns);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectPriorityFilter)

  return {
    allBoards,
    boardById,
    columns,
    isLoading,
    error,
    filter,
  };
};
// import { useBoards } from 'hooks';
// const { allBoards, boardById, columns,isLoading,error, filter } = useBoards();
