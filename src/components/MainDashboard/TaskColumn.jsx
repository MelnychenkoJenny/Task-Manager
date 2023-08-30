import styles from 'styles/index.module.scss';
import { Card } from 'components/Card';
import { BtnAddColumn } from './BtnAddColumn';
import { BtnAddCard } from './BtnAddCard';
import { TitleCards } from './TitleCards';
import { useState } from 'react';

export const TaskColumn = ({ className }) => {
  const [themeColor] = useState('violet');

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
        title={'Title Cards'}
        theme={themeColor}
      />
      <Card />
      <BtnAddColumn
        className={styles.KkBtnAddColumn}
        title={'Add column'}
        onClick={onAddColumn}
        theme={themeColor}
      />
      <BtnAddCard
        className={styles.KkBtnAddCard}
        title={'Add another card'}
        onClick={onAddCard}
        theme={themeColor}
      />
    </div>
  );
};
