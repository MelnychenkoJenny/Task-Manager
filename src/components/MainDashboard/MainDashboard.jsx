// 💙💛 Kostiantyn Koshyk
import styles from 'styles/index.module.scss';
import { BtnAddColumn } from './BtnAddColumn';
import { Filters } from './Filters';
import { TaskColumn } from './TaskColumn';
import { useEffect } from 'react';
import { useBoards } from 'hooks';
import { useDispatch } from 'react-redux';
import { getBoardById } from 'redux/board/boardOperations';
import { getColumns } from 'redux/column/columnOperations';
import { useColumns } from 'hooks/useColumns';

export const MainDashboard = () => {
  const idBoard = '64f27b0de11a394f029c0f84'; // этот id прилетает из сайтбара !!!!!!!!!!!!!
  const { boardById } = useBoards();
  const { allColumns } = useColumns();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardById(idBoard));
    dispatch(getColumns(idBoard));
  }, [dispatch]);

  if (!boardById) return;

  const { title } = boardById;

  const onAddColumn = () => {
    console.log('Add Column click');
  };

  return (
    <section className={styles.KkSectionMainDashboard}>
      <Filters className={styles.KkFilters} titleBoard={title} />

      <ul className={styles.KkColums}>
        {allColumns.map(({ _id, title }) => (
          <li key={_id}>
            <TaskColumn
              className={styles.KkTaskColumn}
              titleCards={title}
              idColumn={_id}
            />
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
