import styles from 'styles/index.module.scss';
import { Card } from 'components/Card';
import { BtnAddColumn } from './BtnAddColumn';
import { BtnAddCard } from './BtnAddCard';
import { TitleCards } from './TitleCards';
import { useState } from 'react';

export const TaskColumn = ({ className, titleCards, cards }) => {
  const [themeColor] = useState('light');
  // // ниже имитация store
  // const [cards] = useState([
  //   {
  //     id: '01',
  //     titleCard: 'Design and Prototyping SoYummy',
  //     description:
  //       'Create visually appealing and functional design prototypes based on the pproved concepts',
  //   },
  //   {
  //     id: '02',
  //     titleCard: 'Research and Analysis',
  //     description:
  //       'Conduct in-depth research and analysis on the project topic, gather relevant data, and identify',
  //   },
  // ]);

  const onAddColumn = () => {
    console.log('Add Column click');
  };

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
      {cards.map(({ id, titleCard, description }) => (
        <ul key={id}>
          <Card titleCard={titleCard} description={description} />
        </ul>
      ))}
      <BtnAddCard
        className={styles.KkBtnAddCard}
        title={'Add another card'}
        onClick={onAddCard}
        theme={themeColor}
      />
    </div>
  );
};
