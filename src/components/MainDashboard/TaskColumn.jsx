// 💙💛 Kostiantyn Koshyk
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

export const TaskColumn = ({ className, titleCards, idColumn }) => {
  const [themeColor] = useState('light');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { allTasks } = useColumns();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks(idColumn));
  }, [dispatch, idColumn]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={className}>
      <TitleCards
        className={styles.TitleCards}
        title={titleCards}
        theme={themeColor}
      />

      <ul className={styles.KkCards}>
        {allTasks &&
          allTasks.map(({ _id, title, description, priority, deadline }) => (
            <li key={_id}>
              <Card
                cardTitle={title}
                description={description}
                priority={priority}
                deadline={deadline}
              />
              <p>id Task: {_id}</p>
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
