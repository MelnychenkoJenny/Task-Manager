import styles from 'styles/index.module.scss';
import { Modal } from '../Modal/Modal';
import { Card } from 'components/Card';
import { AddCard } from 'components/AddCard';
// import { BtnAddColumn } from './BtnAddColumn';
import { BtnAddCard } from './BtnAddCard';
import { TitleCards } from './TitleCards';
import { useState } from 'react';

export const TaskColumn = ({ className, titleCards, cards }) => {
  const [themeColor] = useState('light');

  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {cards.map(({ id, titleCard, description, priority, deadline }) => (
        <ul key={id}>
          <Card id={id} cardTitle={titleCard} description={description} priority={priority} deadline={deadline} />
        </ul>
      ))}
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
