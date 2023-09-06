import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { Modal } from '../Modal/Modal';
import { AddCard } from '../AddCard/AddCard';
import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { deleteTasks, updateTasks } from 'redux/board/boardOperations';
import { useParams } from 'react-router-dom';
import { useAuth, useBoards } from 'hooks';

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


const Card = ({ id, cardTitle, description, priority, deadline, idColumn }) => {
  const { user } = useAuth();
  const { columns } = useBoards();
  const { boardName } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverflowVisible, setOverflowVisible] = useState(false); // управління станом відкриття тексту
  const dispatch = useDispatch();
  const deadlineIsToday = dayjs().format('DD/MM/YYYY') === deadline; // dayjs().format('DD/MM/YYYY') - сьогоднішня дата у визначеному форматі
  const [isPopupVisible, setisPopupVisible] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDescClick = () => {
    setOverflowVisible(!isOverflowVisible);
  };

  const onOpenPopup = () => {
    setisPopupVisible(true);
  };
  const onClosePopup = () => {
    setisPopupVisible(false);
  }; 

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setisPopupVisible(false);
     };
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPopupVisible]);

  const onColumnChange = () => {
    console.log('Here we change a column')
    onClosePopup();
  }; 

  return (
    <div style={{ borderLeftColor: getBgColor(priority, user.theme === 'dark' ? 'rgba(255, 255, 255, 0.30)' : 'rgba(22, 22, 22, 0.30)') }} className={scss.OBCardContainer} data-theme={user.theme}>

      <h4 className={scss.OBCardTitle}>{cardTitle}</h4>
      <p className={`${scss.OBCardDescription}  ${isOverflowVisible ? scss.OBCardDescriptionFull : scss.OBCardDescriptionShort}`} onClick={handleDescClick}>{description}</p>

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
            onClick={handleOpenModal}
          >
            <svg width="16" height="16">
              <use href={SvgSprite + '#icon-pencil'} />
            </svg>
          </button>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <AddCard
                idColumn={idColumn}
                modalTitle={'Edit card'}
                id={id}
                cardTitle={cardTitle}
                description={description}
                priority={priority}
                deadline={deadline}
                modalBtnTitle={'Edit'}
                operation={updateTasks}
                onClose={handleCloseModal}
              />
            </Modal>
          )}
          <button type='button' className={scss.OBCardBtnIcon} onClick={onOpenPopup} aria-label='move task to another column'>
            <svg width="16" height="16">
              <use href={SvgSprite + '#icon-arrow'} />
            </svg>
          </button >
          {isPopupVisible && (
              <div className={scss.OBCardPopupContainer}>
                  <ul className={scss.OBCardPopupList}>
                    {columns &&
                        columns.map(({ _id, title }) => (
                          <li key={_id} className={scss.OBCardPopupItem}>
                            <p className={scss.OBCardPopupText}>{title}</p>
                            <button
                                type="button"
                                className={scss.OBCardBtnIcon}
                                aria-label="change column"
                                onClick={onColumnChange}
                            >
                                <svg width="16" height="16">
                                  <use href={SvgSprite + '#icon-arrow'} />
                                </svg>
                            </button>
                          </li>
                        ))
                      }
                  </ul>
              </div>
          )}
          <button
            type="button"
            className={scss.OBCardBtnIcon}
            aria-label="delete task"
            onClick={() => dispatch(deleteTasks({ id, boardName }))}
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
