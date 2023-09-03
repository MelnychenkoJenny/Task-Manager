// 💙💛 Kostiantyn Koshyk
import styles from 'styles/index.module.scss';
import { BtnAddColumn } from './BtnAddColumn';
import { Filters } from './Filters';
import { TaskColumn } from './TaskColumn';
import { useEffect } from 'react';
import { useBoards } from 'hooks';
import { useDispatch } from 'react-redux';
import {
  // addBoards,
  // deleteBoards,
  getAllBoards,
  getBoardById,
  // updateBoard,
} from 'redux/board/boardOperations';
import {
  // addColumn,
  // deleteColumn,
  // getColumnById,
  getColumns,
  // updateColumn,
} from 'redux/column/columnOperations';
import { useColumns } from 'hooks/useColumns';
import {
  // addTask,
  // deleteTask,
  getTasks,
  // updateTask,
} from 'redux/task/taskOperations';

export const MainDashboard = () => {
  const idBoard = '64f3a3fa79cb8e451035865d'; // этот id прилетает из сайтбара !!!!!!!!!!!!!
  const { allBoards, boardById } = useBoards();
  const { allColumns, allTasks } = useColumns();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardById(idBoard));
    dispatch(getColumns(idBoard));
    dispatch(getAllBoards());
    dispatch(getTasks('64f3b37f79cb8e4510358ae7'));
  }, [dispatch]);

  const click = () => {
    // ======================================================== Board
    // 1. Создать Board
    // dispatch(
    //   addBoards({
    //     title: 'New Board',
    //     icon: 'icon-project',
    //     background: 'background2',
    //   })
    // );
    // // 2. Удалить Board
    // dispatch(deleteBoards('64f39de379cb8e4510358425'));
    // 3 Обновить Board
    // dispatch(
    //   updateBoard({
    //     _id: '64f39d8079cb8e45103583f2',
    //     title: 'Board update',
    //     icon: 'icon-colors',
    //     background: 'background1',
    //   })
    // );
    // 4 Получить все Boards
    // dispatch(getAllBoards());
    // 5 Получить все Boards
    // dispatch(getBoardById('64f39de379cb8e4510358425'));
    // ============================================================= Column
    // 1. Создать Column
    // dispatch(
    //   addColumn({
    //     title: 'New Column',
    //     board: '64f3ccb879cb8e4510359091',
    //   })
    // );
    // 2. Удалить Column (передать id колонки)
    // dispatch(deleteColumn('64f3cd3c79cb8e45103590af'));
    // 3 Обновить Column
    // dispatch(
    //   updateColumn({ id: '64f3a60f79cb8e45103586b0', title: 'New Column 1' })
    // );
    // 4 Получить все Column
    // dispatch(getColumns());
    // 5 Получить колонку по id
    // dispatch(getColumnById('64f3a60f79cb8e45103586b0'));
    // =============================================================== Tasks
    // 1. Создать Task
    // dispatch(
    //   addTask({
    //     title: 'New Task 1',
    //     taskOwner: '64f3b37f79cb8e4510358ae7',
    //     description: 'task description',
    //   })
    // );
    // 2. Удалить Task (передать id колонки)
    // dispatch(deleteTask('64f3a6ba79cb8e451035877c'));
    // 3 Обновить Task
    // dispatch(
    //   updateTask({
    //     taskId: '64f237418ad71f5d5364dc4f',
    //     title: 'Linda',
    //     description: '',
    //     priority: '',
    //     deadLine: '',
    //   })
    // );
    // 4 Получить все Tsks
    // dispatch(getTasks('64f3b37f79cb8e4510358ae7'));
  };

  console.log('allBoards :>>>>>>>>>>>>>>>>>> ', allBoards);
  console.log('allColumns :>>>>>>>>>>>>>>>>> ', allColumns);
  console.log('allTasks :>>>>>>>>>>>>>>>>> ', allTasks);

  if (!boardById) return;

  const { title } = boardById;

  const onAddColumn = () => {
    console.log('Add Column click');
  };

  return (
    <section className={styles.KkSectionMainDashboard}>
      <Filters className={styles.KkFilters} titleBoard={title} />
      <button onClick={click}>click</button>

      <ul className={styles.KkColums}>
        {allColumns.map(({ _id, title }) => (
          <li key={_id}>
            <TaskColumn
              className={styles.KkTaskColumn}
              titleCards={title}
              idColumn={_id}
            />
            <p>id Column: {_id}</p>
          </li>
        ))}
        <BtnAddColumn
          className={styles.KkBtnAddColumnMain}
          title={'Add column'}
          theme={'light'}
          onClick={onAddColumn}
        />
      </ul>
    </section>
  );
};
