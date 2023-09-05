import { useState } from 'react';
// import { useDispatch } from 'react-redux'
import dayjs from 'dayjs';
import { Modal } from '../Modal/Modal'
import { AddCard } from '../AddCard/AddCard';
import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { useAuth } from 'hooks';


const getBgColor = priority => {
  switch (priority) {
   case 'low':
     return '#8FA1D0';
   case 'medium':
     return 'rgba(224, 156, 181, 1)';
   case 'high':
     return '#BEDBB0';
   case 'without':
     return 'rgba(22, 22, 22, 0.30)';
   default:
    break;
  }    
 }


const Card = ({ id, cardTitle, description, priority, deadline }) => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
   // const dispatch = useDispatch();
   const deadlineIsToday = dayjs().format('DD/MM/YYYY') === deadline; // dayjs().format('DD/MM/YYYY') - сьогоднішня дата у визначеному форматі
   
   const handleOpenModal = () => {
     setIsModalOpen(true);
   };

   const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ borderLeftColor: getBgColor(priority) }} className={scss.OBCardContainer} data-theme={user.theme}>
      <h4 className={scss.OBCardTitle}>{cardTitle}</h4>
      <p className={scss.OBCardDescription}>{description}</p>

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
                <div style={{ backgroundColor: getBgColor(priority) }} className={scss.OBCardPriorityCircle}></div>
              </td>
              <td className={scss.OBCardDate}>{deadline}</td>
            </tr>
          </tbody>
        </table>

        {/* --------------------------- іконки --------------------------- */}

        <div className={scss.OBCardIconsWrapper}>
          {deadlineIsToday &&
            <svg className={scss.OBCardBellIcon} width="16" height="16" style={{ stroke: user.theme === 'violet' ? '#585bbe' : '#bedfad' }}>
              <use href={SvgSprite + '#icon-bell'} />
            </svg>            
          }
          <button type='button' className={scss.OBCardBtnIcon} aria-label='edit task' onClick={handleOpenModal}>
            <svg width="16" height="16"> 
              <use href={SvgSprite + '#icon-pencil'} />
            </svg>            
          </button>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <AddCard modalTitle={'Edit card'} id={id} cardTitle={cardTitle} description={description} priority={priority} deadline={deadline} modalBtnTitle={'Edit'} /> 
            </Modal>             
          )}
          {/* <button type='button' className={scss.OBCardBtnIcon} aria-label='move task to another column'>
            <svg width="16" height="16">
              <use href={SvgSprite + '#icon-arrow'} />
            </svg>
          </button > */}
          <button type='button' className={scss.OBCardBtnIcon} aria-label='delete task' /*onClick={() => dispatch(deleteCard(id))}*/ >
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