// 💙💛 Kostiantyn Koshyk
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCustomContext } from '../Context/Context'; 
import {
  addColumn,
  editColumn,
  deleteColumn,
  addTask,
  updateTask 
} from 'redux/board/boardOperations';
import { useAuth, useBoards } from 'hooks';
import { Filters } from './Filters';
import { DropWrapper } from './DropWrapper'; // dnd
import { BtnAddColumn } from './BtnAddColumn';
import { TitleCards } from './TitleCards';
import { TasksList } from 'components/TasksList';
import { BtnAddCard } from './BtnAddCard';
import { Modal } from '../Modal/Modal';
import { AddCard } from 'components/AddCard/AddCard';
import { PopColumn } from '../PopColumn/PopColumn';
import Loader from 'components/Loader/Loader';
import { imagesBg } from 'images/image-url';
import styles from 'styles/index.module.scss';


export const MainDashboard = () => {
  const { boardById, isLoading } = useBoards();
  const { loading } = useAuth();
  const dispatch = useDispatch();
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalAddCardOpen, setIsModalAddCardOpen] = useState(false);
  const [activeColumnId, setActiveColumnId] = useState('');
  const [titleColumnId, setTitleColumnId] = useState('');
  const [reoderedCardsIds, setReoderedCardsIds] = useState({});
  const context = useCustomContext();

  const bg = imagesBg?.find(image => image.name === boardById.background);

  const containerStyle = {
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

  //------------------- dnd (перетягування картки між колонками) -------------------------

  const onDrop = (cardToDrop, monitor, board, taskOwner, columnTitle, tasks, taskOrder, columnIndex) => { // виклик ф-ції в DropWrapper
    // tasks - таски колонки, в яку кидаємо картку 
    // taskOwner - id колонки, в яку кидаємо картку  

    // визначимо чи кидаємо таску в чужу колонку чи свою
    const card = tasks.filter(task => task._id === cardToDrop.idTask); // кидаючи в іншу колонку має бути false - поверне []
    //true отримаємо тільки кинувши картку в колонку, в якій знаходиться ця картка - поверне [{картка, яку кидаємо}] 

    if(card.length === 0) { // true (те, що треба) - коли таска перекидується в іншу колонку
      // позбавляємося картки в її рідній колонці
      const prevCardId = cardToDrop.idTask;
      removePrevId(prevCardId);
      
      cardToDrop.taskOwner = taskOwner; // присвоїли картці, яку кидаємо новий id колонки

      dispatch(updateTask({ ...cardToDrop, boardId: board, columnIndex })); // відправка оновленого об'єкту картки, яку перетягуємо
      if(reoderedCardsIds._id === taskOwner) {
          dispatch(editColumn({ idColumn: taskOwner, title: columnTitle, taskOrder: reoderedCardsIds.taskOrder })); 
      }
    } 
  };

  // оновлюємо taskOrder в колонці, звідки забрали картку
  const removePrevId = (prevCardId) => {
    context.columns.forEach(column => {
        const updatedTaskOrder = column.taskOrder.filter(id => id !== prevCardId); // taskOrder без лишнього id // повертає новий масив або []

        if(updatedTaskOrder.length !== column.taskOrder.length) { // подальші зміни тільки для taskOrder тієї колонки, в якій є лишній id 
          dispatch(editColumn({ idColumn: column._id, title: column.title, taskOrder: updatedTaskOrder }));          
        }
    });
  };

  return (
    <div className={styles.KkSectionMainDashboard} style={containerStyle}>
      {isLoading && loading && <Loader />}
      <Filters className={styles.KkFilters} />
        <ul className={styles.KkColums}>
          {context.columns &&
            context.columns.map(({ board, _id, title, tasks, taskOrder }, index) => (
              <li key={_id}>
                <DropWrapper 
                  onDrop={onDrop} 
                  board={board} 
                  taskOwner={_id} 
                  columnTitle={title} 
                  tasks={tasks} 
                  taskOrder={taskOrder} 
                  columns={context.columns} 
                  columnIndex={index}
                >
                  <TitleCards
                    className={styles.TitleCards}
                    title={title}
                    onEdit={() => {
                      setIsModalEditOpen(true);
                      setActiveColumnId(_id);
                      setTitleColumnId(title);
                    }}
                    onTrash={() => dispatch(deleteColumn(_id))}
                  />
                  {tasks && 
                    <TasksList 
                      tasks={tasks} 
                      idColumn={_id} 
                      columnTitle={title} 
                      board={board}
                      getReoderedCardsIds={setReoderedCardsIds}
                    />
                  }
                  <BtnAddCard
                    className={styles.KkBtnAddCard}
                    title={'Add another card'}
                    theme={'light'}
                    onClick={() => {
                      setIsModalAddCardOpen(true);
                      setActiveColumnId(_id);
                    }}
                  />
                </DropWrapper>
              </li>
            ))}
             <BtnAddColumn
                className={styles.KkBtnAddColumnMain}
                title={'Add another column'}
                theme={'light'}
                onClick={() => setIsModalAddOpen(true)}
            />
        </ul>       
      {isModalAddOpen && (
        <Modal isOpen={isModalAddOpen} onClose={() => setIsModalAddOpen(false)}>
          <PopColumn
            modalTitle={'Add column'}
            modalBtnTitle={'Add'}
            onClose={() => setIsModalAddOpen(false)}
            operation={addColumn}
          />
        </Modal>
      )}
      {isModalEditOpen && (
        <Modal isOpen={isModalEditOpen} onClose={() => setIsModalEditOpen(false)}>
          <PopColumn
            modalTitle={'Edit column'}
            modalBtnTitle={'Add'}
            onClose={() => setIsModalEditOpen(false)}
            idColumn={activeColumnId}
            infoData={{ title: titleColumnId }}
            operation={editColumn}
          />
        </Modal>
      )}
      {isModalAddCardOpen && (
        <Modal isOpen={isModalAddCardOpen} onClose={() => setIsModalAddCardOpen(false)}>
          <AddCard
            modalTitle={'Add card'}
            modalBtnTitle={'Add'}
            onClose={() => setIsModalAddCardOpen(false)}
            idColumn={activeColumnId}
            operation={addTask}
          />
        </Modal>
      )}
    </div>
  );
};
