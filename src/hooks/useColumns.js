import { useSelector } from 'react-redux';
import { selectColumnById, selectColumns } from 'redux/column/columnSelectors';

export const useColumns = () => {
  const allColumns = useSelector(selectColumns);
  const columnById = useSelector(selectColumnById);

  return {
    allColumns,
    columnById,
  };
};
// import { useBoards } from 'hooks';
// const { allBoards, boardById } = useBoards();
