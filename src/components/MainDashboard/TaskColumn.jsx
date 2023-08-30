import styles from 'styles/index.module.scss';
// import SvgSprite from 'images/sprite.svg';
import { Card } from 'components/Card';
import { BtnAddColumn } from './BtnAddColumn';
import { BtnAddCard } from './BtnAddCard';
import { TitleCards } from './TitleCards';
import { useState } from 'react';

export const TaskColumn = ({ className }) => {
  const [themeColor, /*useThemeColor*/] = useState('light');

  return (
    <div className={className}>
      <TitleCards
        className={styles.TitleCards}
        title={'Title Cards'}
        theme={themeColor}
      />
      <Card />
      <BtnAddColumn
        className={styles.TestTest}
        title={'Add column'}
        theme={themeColor}
      />
      <BtnAddCard
        className={styles.TestTest}
        title={'Add another card'}
        theme={themeColor}
      />
    </div>
  );
};
