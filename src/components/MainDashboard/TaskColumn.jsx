import styles from 'styles/index.module.scss';
import { Card } from 'components/Card';
// import { BtnAddColumn } from './BtnAddColumn';
import { BtnAddCard } from './BtnAddCard';
import { TitleCards } from './TitleCards';
import { useState } from 'react';

export const TaskColumn = ({ className, titleCards, cards }) => {
  const [themeColor] = useState('light');

  const onAddCard = () => {
    console.log('Add Card click');
  };

  return (
    <div className={className}>
      <TitleCards
        className={styles.TitleCards}
        title={titleCards}
        theme={themeColor}
      />
      <ul className={styles.KkCards}>
        {cards.map(({ id, titleCard, description }) => (
          <li key={id}>
            <Card titleCard={titleCard} description={description} />
          </li>
        ))}
      </ul>
      <BtnAddCard
        className={styles.KkBtnAddCard}
        title={'Add another card'}
        onClick={onAddCard}
        theme={themeColor}
      />
    </div>
  );
};
