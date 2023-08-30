import { useSelector } from 'react-redux';
import { selectBoards, selectBoardById } from 'redux/board/boardSelectors';

export const useBoards = () => {
  const allBoards = useSelector(selectBoards);
  const boardById = useSelector(selectBoardById);

  return {
    allBoards,
    boardById,
  };
};
// import { useBoards } from 'hooks';
// const { allBoards, boardById } = useBoards();
