import { useSelector } from 'react-redux';
import { selectColumnById, selectColumns } from 'redux/column/columnSelectors';
import { selectTasks } from 'redux/task/taskSelectors';

export const useColumns = () => {
  const allColumns = useSelector(selectColumns);
  const columnById = useSelector(selectColumnById);
  const allTasks = useSelector(selectTasks);

  return {
    allColumns,
    columnById,
    allTasks,
  };
};
// import { useBoards } from 'hooks';
// const { allBoards, boardById } = useBoards();
