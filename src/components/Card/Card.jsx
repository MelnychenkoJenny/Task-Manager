import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useDrag, useDrop } from 'react-dnd';   // dnd
import { ItemTypes } from '../MainDashboard/items'; // dnd
import { editColumn, deleteTask, updateTask } from 'redux/board/boardOperations';
import { useAuth/*, useBoards*/ } from 'hooks';
import { useCustomContext } from '../Context/Context'; 
import { Modal } from '../Modal/Modal';
import { AddCard } from '../AddCard/AddCard';
import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';


const getBgColor = (priority, color) => {
  switch (priority) {
   case 'low':
     return '#8FA1D0';
   case 'medium':
     return 'rgba(224, 156, 181, 1)';
   case 'high':
     return '#BEDBB0';
   case 'without':
     return color; //'rgba(22, 22, 22, 0.30)'; //rgba(255, 255, 255, 0.30)
   default:
    break;
  }    
 }


const Card = ({ id, cardTitle, description, priority, deadline, idColumn, taskOwner, index, columnTitle, moveInsideColumn, moveToAnotherColumn, moveToAnotherColumnUnder }) => {
  const dispatch = useDispatch();  
  const { user } = useAuth();
  // const { columns } = useBoards();
  const { boardName } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverflowVisible, setOverflowVisible] = useState(false); // управління станом відкриття тексту
  const [isPopupVisible, setisPopupVisible] = useState(false);
  const deadlineIsToday = dayjs().format('DD/MM/YYYY') === deadline; // dayjs().format('DD/MM/YYYY') - сьогоднішня дата у визначеному форматі
  const context = useCustomContext();
  
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setisPopupVisible(false);
     };
    };
    window.addEventListener('keydown', handleKeyDown);
    const handleClickOutside = (e) => {
      const popupContainer = document.querySelector(`.${scss.OBCardPopupContainer}`);
      if (popupContainer && !popupContainer?.contains(e.target)) {
        setisPopupVisible(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClickOutside);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isPopupVisible]);

  const onColumnChange = (_id, title, description, priority, deadline, id, index) => {
    dispatch(updateTask({taskOwner: _id, title, description, priority, deadLine: deadline, idTask: id, boardId: boardName, columnIndex: index}))
    setisPopupVisible(false);
  }; 

  //----------------------- dnd (відривання картки)-------------------------------

  const [{ isDragging }, drag] = useDrag({ 
    type: ItemTypes.CARD,
    item: { idTask: id, title: cardTitle, description, priority, deadLine: deadline, taskOwner, index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(), 
    })
  });
  //-------------------------------------------------------------------------------
  // dnd: (1) перетягування але не кидання картки в іншу колонку (кидання ініціюється в DropWrapper і реалізується ф-цією onDrop (в MainDashboard))
  //      (2) перетягування і кидання картки в межах 1 колонки

  const ref = useRef(null);

  const handleHover = (item, monitor) => {
    if (!ref.current) {   
      return; 
    }
    const dragIndex = item.index; 
    const hoverIndex = index; 
    const hoverBoundingRect = ref.current?.getBoundingClientRect()
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // середина картки по вертикалі
    const clientOffset = monitor.getClientOffset(); 
    const hoverClientY = clientOffset.y - hoverBoundingRect.top; // відстань від верхнього краю картки до курсора миші, яким грабнули картку

    // (1) перетягування але поки не кидання картки в іншу колонку ---------------------------------------------------------------

    // визначимо dragIndex картки, яку тягнемо в іншу колонку 
    const searchIndexes = context.columns.map(column => { // searchIndexes = [-1, 1, -1] - там, де не '-1' - то індекс картки, яку тягнемо
      if(column._id === item.taskOwner) {
          return column.taskOrder.indexOf(item.idTask);
      }
      return -1;
    });
    const newDragIndex = searchIndexes.filter(item => item !== -1); // [1] (або інше число, крім '-1') - індекс картки, яку тягнемо - стала величина

    // перетягування вниз, курсор ковзає по верхній частині статичної картки
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) { 
      if(item.taskOwner !== taskOwner) {
        moveToAnotherColumn(hoverIndex, item); 
      } 
      return;
    }

    // перетягування вверх, курсор ковзає по нижній частині статичної картки
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) { 
      if( item.taskOwner !== taskOwner) {
        moveToAnotherColumnUnder(hoverIndex, item);  
      }  
      return;
    }

    // тепер навпаки
    if (item.taskOwner !== taskOwner) {
      if(newDragIndex[0] === hoverIndex) { //перетягування на ту ж позицію
        if(hoverClientY > hoverMiddleY) { // курсор ковзає по нижній частині статичної картки 
          moveToAnotherColumnUnder(hoverIndex, item);
        } else if(hoverClientY < hoverMiddleY) { // курсор ковзає по верхній частині статичної картки 
          moveToAnotherColumn(hoverIndex, item);
        }
      } else if(dragIndex < hoverIndex && hoverClientY > hoverMiddleY) { // перетягування вниз, курсор ковзає по нижній частині статичної картки
        moveToAnotherColumnUnder(hoverIndex, item);
      } else if(dragIndex > hoverIndex && hoverClientY < hoverMiddleY) { // перетягування вверх, курсор ковзає по верхній частині статичної картки
        moveToAnotherColumn(hoverIndex, item);
      }
    }

    // (2) перетягування і кидання картки в межах 1 колонки
    if (dragIndex !== hoverIndex && item.taskOwner === taskOwner) { 
      moveInsideColumn(dragIndex, hoverIndex);  
    }

    item.index = hoverIndex;
  }

  const [{ handlerId, isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(), 
        isOver: monitor.isOver(),
      }
    },
    hover: handleHover,
  });

  drag(drop(ref)); 
  //--------------------------------------------------------------------------------

  const handleDeleteTask = () => {
    dispatch(deleteTask({ id, boardName }));
    // після видалення таски, видаляємо її id і з taskOrder
    const columnIndex = context.columns.findIndex(column => column._id === taskOwner);
    const tasksIdxs = context.columns[columnIndex].taskOrder;
    const idxToDelete = tasksIdxs && tasksIdxs.findIndex(idItem => idItem === id);

    if(idxToDelete !== -1) {
      const updatedTaskOrder = [...tasksIdxs];
      updatedTaskOrder.splice(idxToDelete, 1);    
      dispatch(editColumn({ idColumn: taskOwner, title: columnTitle, taskOrder: updatedTaskOrder }))
    }    
  };

  return (
    <div 
      ref={ref} // dnd
      data-handler-id={handlerId} // dnd 
      data-theme={user.theme}
      style={{ 
        opacity: isDragging ? 0.3 : 1, // dnd 
        backgroundColor: isOver && 'rgba(75, 65, 65, 0.1)', // dnd 
        transition: '250ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
        borderLeftColor: getBgColor(priority, user.theme === 'dark' ? 'rgba(255, 255, 255, 0.30)' : 'rgba(22, 22, 22, 0.30)') 
      }}  
      className={scss.OBCardContainer} 
    >
      <h4 className={scss.OBCardTitle}>{cardTitle}</h4>
      {/* <p>id:{id}</p>
      <p>taskOwner:{taskOwner}</p> */}
      <p 
        className={`${scss.OBCardDescription} ${isOverflowVisible ? scss.OBCardDescriptionFull : scss.OBCardDescriptionShort}`} 
        onClick={() => setOverflowVisible(!isOverflowVisible)}
      >
        {description}
      </p>

      <hr className={scss.OBCardSeparator} />

      <div className={scss.OBCardFooterContainer}>
        <table className={scss.OBCardValuesContainer}>
          <thead>
            <tr>
              <th className={scss.OBCardProreties}>Priority</th>
              <th className={scss.OBCardProreties}>Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div
                  style={{ backgroundColor: getBgColor(priority, user.theme === 'dark' ? 'rgba(255, 255, 255, 0.30)' : 'rgba(22, 22, 22, 0.30)') }}
                  className={scss.OBCardPriorityCircle}
                ></div>
              </td>
              <td className={scss.OBCardDate}>{deadline}</td>
            </tr>
          </tbody>
        </table>

        {/* --------------------------- іконки --------------------------- */}

        <div className={scss.OBCardIconsWrapper}>
          {deadlineIsToday &&
            (<svg className={scss.OBCardBellIcon} width="16" height="16" style={{ stroke: user.theme === 'violet' ? '#585bbe' : '#bedfad' }}>

              <use href={SvgSprite + '#icon-bell'} />
            </svg>
          )}
          <button
            type="button"
            className={scss.OBCardBtnIcon}
            aria-label="edit task"
            onClick={() => setIsModalOpen(true)}
          >
            <svg width="16" height="16">
              <use href={SvgSprite + '#icon-pencil'} />
            </svg>
          </button>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <AddCard
                idColumn={idColumn}
                modalTitle={'Edit card'}
                id={id}
                cardTitle={cardTitle}
                description={description}
                priority={priority}
                deadline={deadline}
                modalBtnTitle={'Edit'}
                operation={updateTask}
                onClose={() => setIsModalOpen(false)}
              />
            </Modal>
          )}
          <button 
            type='button' 
            className={scss.OBCardBtnIcon} 
            onClick={(e) => {
              e.stopPropagation();
              setisPopupVisible(true);
            }} 
            aria-label='move task to another column'
          >
            <svg width="16" height="16">
              <use href={SvgSprite + '#icon-arrow'} />
            </svg>
          </button >
          {isPopupVisible &&  (
              <div className={scss.OBCardPopupContainer}>
                  {context.columns.length <= 1 ? <p>Add columns</p> : (<ul className={scss.OBCardPopupList}>
                    {context.columns &&
                        context.columns.map(({ _id, title: columnTitle }, index) => {
                          return (
                            <li key={_id} className={taskOwner===_id ? `${scss.OBCardPopupItem} ${scss.disabledTransfer}` : scss.OBCardPopupItem}>
                             <p className={scss.OBCardPopupText}>{columnTitle}</p>
                              <button
                                type="button"
                                className={scss.OBCardBtnIcon}
                                aria-label="change column"
                                onClick={()=>onColumnChange(_id, cardTitle, description, priority, deadline, id, index)}
                              >
                                <svg width="16" height="16">
                                  <use href={SvgSprite + '#icon-arrow'} />
                                </svg>
                              </button>
                            </li>
                          )
                        })
                      }
                  </ul>)}
              </div>
          )}
          <button
            type="button"
            className={scss.OBCardBtnIcon}
            aria-label="delete task"
            onClick={handleDeleteTask}
          >
            <svg width="16" height="16">
              <use href={SvgSprite + '#icon-trash'} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
