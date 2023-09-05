// 💙💛 Kostiantyn Koshyk
import instance from 'redux/auth/authOperations';
import styles from 'styles/index.module.scss';
import { Modal } from '../Modal/Modal';
import { Card } from 'components/Card';
import { AddCard } from 'components/AddCard';
import { BtnAddCard } from './BtnAddCard';
import { TitleCards } from './TitleCards';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks } from 'redux/task/taskOperations';
import { useColumns } from 'hooks/useColumns';

export const TaskColumn = ({ className, titleCards, idColumn, idBoard }) => {
  const [themeColor] = useState('light');

  const [tasks, setTasks] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { allColumns, allTasks } = useColumns();

  const dispatch = useDispatch();

  useEffect(() => {
    // const currentIdColumn = allColumns.find(el => el._id === idColumn);
    // console.log('currentIdColumn :>> ', currentIdColumn._id);
    // dispatch(getTasks(currentIdColumn._id));

    (async () => {
      const { data } = await instance.get(`/tasks/${idColumn}`);
      setTasks(data);
      console.log(`data-tasks idColumn: ${idColumn} :>> `, data);
    })();

    dispatch(getTasks(idColumn));
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const currentIdColumn = allColumns.find(el => el._id === idColumn);

  console.log('allColumns allColumns >>>>>>> :>> ', allColumns);
  // console.log('current Column :>> ', currentIdColumn._id);

  return (
    <div className={className}>
      <TitleCards
        className={styles.TitleCards}
        title={titleCards}
        theme={themeColor}
      />
      <ul className={styles.KkCards}>
        {tasks &&
          tasks.map(({ _id, title, description, priority, deadline }) => (
            <li key={_id}>
              <Card
                cardTitle={title}
                description={description}
                priority={priority}
                deadline={deadline}
              />
              <p>id Task: {_id}</p>
              <p>id Board: {idBoard}</p>
            </li>
          ))}
      </ul>

      <BtnAddCard
        className={styles.KkBtnAddCard}
        title={'Add another card'}
        onClick={handleOpenModal}
        theme={themeColor}
      />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <AddCard modalTitle={'Add card'} modalBtnTitle={'Add'} />
        </Modal>
      )}
    </div>
  );
};
