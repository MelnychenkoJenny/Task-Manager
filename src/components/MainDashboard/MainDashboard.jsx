// 💙💛 Kostiantyn Koshyk
import { Filters } from './Filters';
import styles from 'styles/index.module.scss';
import { BtnAddColumn } from './BtnAddColumn';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { PopColumn } from '../PopColumn/PopColumn';
import {
  addColumn,
  addTasks,
  deleteColumn,
  editColumn,
} from 'redux/board/boardOperations';
import { useDispatch } from 'react-redux';
import { useBoards } from 'hooks';
import { BtnAddCard } from './BtnAddCard';
import { AddCard } from 'components/AddCard/AddCard';

import { TitleCards } from './TitleCards';
import { imagesBg } from 'images/image-url';
import { TasksList } from 'components/TasksList';

export const MainDashboard = () => {
  const { columns, boardById } = useBoards();
  const dispatch = useDispatch();

  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalAddCardOpen, setIsModalAddCardOpen] = useState(false);
  const [activeColumnId, setActiveColumnId] = useState('');
  const [titleColumnId, setTitleColumnId] = useState('');

  //!! Тут на всі відкриття і закриття модалок можна зробити switch
  const handleOpenAddModal = () => {
    setIsModalAddOpen(true);
  };
  const handleCloseAddModal = () => {
    setIsModalAddOpen(false);
  };

  const handleOpenEditModal = () => {
    setIsModalEditOpen(true);
  };
  const handleCloseEditModal = () => {
    setIsModalEditOpen(false);
  };

  const handleOpenAddCardModal = () => {
    setIsModalAddCardOpen(true);
  };
  const handleCloseAddCardModal = () => {
    setIsModalAddCardOpen(false);
  };

  const clickOnColumnItemHandle = columnId => {
    setActiveColumnId(columnId);
  };

  const clickOnColumnTitleHandle = title => {
    setTitleColumnId(title);
  };

  const bg = imagesBg?.find(image => image.name === boardById.background);

  const containerStyle = {
    maxHeight: '100%',
    backgroundImage: `url(${bg?.mobile})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  if (window.innerWidth >= 768) {
    containerStyle.backgroundImage = `url(${bg?.tablet})`;
  }

  if (window.innerWidth >= 1440) {
    containerStyle.backgroundImage = `url(${bg?.desktop})`;
  }

  return (
    <div className={styles.KkSectionMainDashboard} style={containerStyle}>
      <Filters className={styles.KkFilters} />

      <ul className={styles.KkColums}>
        {columns &&
          columns.map(({ _id, title, tasks }) => (
            <li key={_id}>
              <TitleCards
                className={styles.TitleCards}
                title={title}
                onEdit={() => {
                  handleOpenEditModal();
                  clickOnColumnItemHandle(_id);
                  clickOnColumnTitleHandle(title);
                }}
                onTrash={() => dispatch(deleteColumn(_id))}
              />
              {tasks && <TasksList allTasks={tasks} idColumn={_id} />}
              <BtnAddCard
                className={styles.KkBtnAddCard}
                title={'Add another card'}
                theme={'light'}
                onClick={() => {
                  handleOpenAddCardModal();
                  clickOnColumnItemHandle(_id);
                }}
              />
            </li>
          ))}
        <BtnAddColumn
          className={styles.KkBtnAddColumnMain}
          title={'Add another column'}
          theme={'light'}
          onClick={handleOpenAddModal}
        />
      </ul>
      {isModalAddOpen && (
        <Modal isOpen={isModalAddOpen} onClose={handleCloseAddModal}>
          <PopColumn
            modalTitle={'Add column'}
            modalBtnTitle={'Add'}
            onClose={handleCloseAddModal}
            operation={addColumn}
          />
        </Modal>
      )}
      {isModalEditOpen && (
        <Modal isOpen={isModalEditOpen} onClose={handleCloseEditModal}>
          <PopColumn
            modalTitle={'Edit column'}
            modalBtnTitle={'Add'}
            onClose={handleCloseEditModal}
            idColumn={activeColumnId}
            infoData={{ title: titleColumnId }}
            operation={editColumn}
          />
        </Modal>
      )}
      {isModalAddCardOpen && (
        <Modal isOpen={isModalAddCardOpen} onClose={handleCloseAddCardModal}>
          <AddCard
            modalTitle={'Add card'}
            modalBtnTitle={'Add'}
            onClose={handleCloseAddCardModal}
            idColumn={activeColumnId}
            operation={addTasks}
          />
        </Modal>
      )}
    </div>
  );
};
