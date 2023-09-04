import { Filters } from './Filters';
import styles from 'styles/index.module.scss';
import { BtnAddColumn } from './BtnAddColumn';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { PopColumn } from 'components/PopColumn';
import {
  addColumn,
  deleteColumn,
  editColumn,
} from 'redux/board/boardOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useBoards } from 'hooks';
// import { useParams } from 'react-router-dom';
import SvgSprite from 'images/sprite.svg';
import { BtnAddCard } from './BtnAddCard';
import { AddCard } from 'components/AddCard/AddCard';

export const MainDashboard = () => {
  const { columns /*, tasks */} = useBoards();
  console.log('columns', columns);
  // console.log('tasks', tasks);
  const st = useSelector(state => state);
  console.log('state :>> ', st);

  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalAddCardOpen, setIsModalAddCardOpen] = useState(false);
  const [activeColumnId, setActiveColumnId] = useState('');
  const [titleColumnId, setTitleColumnId] = useState('');
console.log('activeColumnId565 :>> ', activeColumnId);
  const dispatch = useDispatch();
  // const  boardId = useParams();

  //!! Тут на всі відкриття і закриття модалок можна зробити switch, але не стала витрачати на че час
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

  return (
    <>
      <Filters className={styles.KkFilters} />
      {/* <button onClick={click}>click</button> */}

      <ul className={styles.KkColums}>
        {columns &&
          columns.map(({ _id, title }) => (
            <li key={_id}>
              <p>title Column: {title}</p>
              <p>id Column: {_id}</p>
              <div className={styles.boardsListItemButtons}>
                <button
                  type="button"
                  className={styles.boardsListItemButton}
                  onClick={() => {
                    handleOpenEditModal();
                    clickOnColumnItemHandle(_id);
                    clickOnColumnTitleHandle(title);
                  }}
                >
                  <svg
                    className={styles.boardsListItemSvg}
                    width="16px"
                    height="16px"
                  >
                    <use href={`${SvgSprite}#icon-pencil`}></use>
                  </svg>
                </button>
                <button
                  type="button"
                  className={styles.boardsListItemButton}
                  onClick={() => dispatch(deleteColumn(_id))}
                >
                  <svg
                    className={styles.boardsListItemSvg}
                    width="16px"
                    height="16px"
                  >
                    <use href={`${SvgSprite}#icon-trash`}></use>
                  </svg>
                </button>
              </div>
              <ul>
                <li>
                  {/* {console.log('title Column:', title, 'id Column:', _id)} */}
                  {/* <TaskColumn
                   className={styles.KkTaskColumn}
                   titleCards={title}
                   idColumn={_id}
                 /> */}
                </li>
              </ul>
              <BtnAddCard
                className={styles.KkBtnAddColumnMain}
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
            // idColumn={activeColumnId}
            // infoData={{title: titleColumnId}}
            // operation={editColumn}
          />
        </Modal>
      )}
    </>
  );
};

// // 💙💛 Kostiantyn Koshyk
// import styles from 'styles/index.module.scss';
// import { BtnAddColumn } from './BtnAddColumn';
// import { Filters } from './Filters';
// import { TaskColumn } from './TaskColumn';
// // import { useEffect } from 'react';
// // import { useBoards } from 'hooks';
// import {
//   useDispatch,
//   // , useSelector
// } from 'react-redux';
// import {
//   addBoards,
//   // deleteBoards,
//   // getAllBoards,
//   // getBoardById,
//   // updateBoard,
// } from 'redux/board/boardOperations';
// // import {
//   // addColumn,
//   // deleteColumn,
//   // getColumnById,
//   // getColumns,
//   // updateColumn,
// // } from 'redux/column/columnOperations';
// // import { useColumns } from 'hooks/useColumns';
// import {
//   // addTask,
//   // deleteTask,
//   // getTasks,
//   // updateTask,
// } from 'redux/task/taskOperations';
// // import { colors } from '@mui/material';

// export const MainDashboard = () => {
//   // const idBoard = '64f494c005baf51a1e771ede';
//   // const {
//   //   // allBoards,
//   //   boardById,
//   // } = useBoards();
//   // const {
//   //   allColumns,
//   //   // , columnById, allTasks
//   // } = useColumns();
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(getBoardById(idBoard));
//   //   dispatch(getColumns(idBoard));
//   //   dispatch(getAllBoards());
//   //   dispatch(getTasks('64f3b37f79cb8e4510358ae7'));
//   // }, [dispatch]);

//   // const click = () => {
//     // ======================================================== Board
//     // 1. Создать Board
//     // dispatch(
//     //   addBoards({
//     //     title: 'New Board',
//     //     icon: 'icon-project',
//     //     background: 'background2',
//     //   })
//     // );
//     // // 2. Удалить Board
//     // dispatch(deleteBoards('64f39de379cb8e4510358425'));
//     // 3 Обновить Board
//     // dispatch(
//     //   updateBoard({
//     //     _id: '64f39d8079cb8e45103583f2',
//     //     title: 'Board update',
//     //     icon: 'icon-colors',
//     //     background: 'background1',
//     //   })
//     // );
//     // 4 Получить все Boards
//     // dispatch(getAllBoards());
//     // 5 Получить все Boards
//     // dispatch(getBoardById('64f39de379cb8e4510358425'));
//     // ============================================================= Column
//     // 1. Создать Column
//     // dispatch(
//     //   addColumn({
//     //     title: 'New Column',
//     //     board: '64f3ccb879cb8e4510359091',
//     //   })
//     // );
//     // 2. Удалить Column (передать id колонки)
//     // dispatch(deleteColumn('64f3cd3c79cb8e45103590af'));
//     // 3 Обновить Column
//     // dispatch(
//     //   updateColumn({ id: '64f3a60f79cb8e45103586b0', title: 'New Column 1' })
//     // );
//     // 4 Получить все Column
//     // dispatch(getColumns());
//     // 5 Получить колонку по id
//     // dispatch(getColumnById('64f3a60f79cb8e45103586b0'));
//     // =============================================================== Tasks
//     // 1. Создать Task
//     // dispatch(
//     //   addTask({
//     //     title: 'New Task 1',
//     //     taskOwner: '64f3b37f79cb8e4510358ae7',
//     //     description: 'task description',
//     //   })
//     // );
//     // 2. Удалить Task (передать id колонки)
//     // dispatch(deleteTask('64f3a6ba79cb8e451035877c'));
//     // 3 Обновить Task
//     // dispatch(
//     //   updateTask({
//     //     taskId: '64f237418ad71f5d5364dc4f',
//     //     title: 'Linda',
//     //     description: '',
//     //     priority: '',
//     //     deadLine: '',
//     //   })
//     // );
//     // 4 Получить все Tsks
//     // dispatch(getTasks('64f3b37f79cb8e4510358ae7'));
//   // };

//   // console.log('allBoards :>>>>>>>>>>>>>>>>>> ', allBoards);
//   // console.log('allColumns :>>>>>>>>>>>>>>>>> ', allColumns);
//   // console.log('allTasks :>>>>>>>>>>>>>>>>> ', allTasks);

//   // if (!boardById) return;

//   // const { title } = boardById;

//   // const onAddColumn = () => {
//   //   console.log('Add Column click');
//   // };

//   return (
//     <>
//       <Filters className={styles.KkFilters} />
//       {/* <button onClick={click}>click</button> */}

//       <ul className={styles.KkColums}>
//         {/* {allColumns.map(({ _id, title }) => (
//           <li key={_id}>
//             <TaskColumn
//               className={styles.KkTaskColumn}
//               titleCards={title}
//               idColumn={_id}
//             />
//             <p>id Column: {_id}</p>
//           </li>
//         ))} */}
//         <BtnAddColumn
//           className={styles.KkBtnAddColumnMain}
//           title={'Add column'}
//           theme={'light'}
//           // onClick={onAddColumn}
//         />
//       </ul>
//     </>
//   );
//         }
