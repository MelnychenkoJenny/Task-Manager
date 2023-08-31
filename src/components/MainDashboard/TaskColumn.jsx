// 💙💛 Kostiantyn Koshyk
import styles from 'styles/index.module.scss';
import { Modal } from '../Modal/Modal';
import { Card } from 'components/Card';
import { AddCard } from 'components/AddCard';
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

      <ul className={styles.KkCards}>
        {cards.map(({ id, titleCard, description, priority, deadline }) => (
          <li key={id}>
            <Card
              cardTitle={titleCard}
              description={description}
              priority={priority}
              deadline={deadline}
            />
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
