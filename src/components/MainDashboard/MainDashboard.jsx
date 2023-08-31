import styles from 'styles/index.module.scss';
import { BtnAddColumn } from './BtnAddColumn';
import { Filters } from './Filters';
import { TaskColumn } from './TaskColumn';
import { useState } from 'react';

export const MainDashboard = () => {
  // ниже имитация store (Redux) --------- temp temp
  const [columns] = useState([
    {
      id: '01',
      titleCards: 'Title Cards 01',
      cards: [
        {
          id: '01',
          titleCard: 'Design and Prototyping SoYummy',
          description:
            'Create visually appealing and functional design prototypes based on the pproved concepts',
        },
        {
          id: '02',
          titleCard: 'Research and Analysis',
          description:
            'Conduct in-depth research and analysis on the project topic, gather relevant data, and identify',
        },
        {
          id: '03',
          titleCard: 'Hi hi hi',
          description:
            'Conduct in-depth research and analysis on the project topic, gather relevant data, and identify',
        },
      ],
    },
    {
      id: '02',
      titleCards: 'Title Cards 02',
      cards: [
        {
          id: '01',
          titleCard: 'Title card 2222',
          description:
            'Create visually appealing and functional design prototypes based on the pproved concepts',
        },
        {
          id: '02',
          titleCard: 'Title cadr 3333',
          description:
            'Conduct in-depth research and analysis on the project topic, gather relevant data, and identify',
        },
      ],
    },
  ]);

  return (
    <section className={styles.KkSectionMainDashboard}>
      <Filters
        className={styles.KkFilters}
        titleBoard={'Title Board'}
        theme={'light'}
      />
      <ul className={styles.KkColums}>
        {columns.map(({ id, titleCards, cards }) => (
          <li key={id}>
            <TaskColumn
              className={styles.KkTaskColumn}
              titleCards={titleCards}
              cards={cards}
            />
          </li>
        ))}
        <BtnAddColumn
          className={styles.KkBtnAddColumnMain}
          title={'Add column'}
          theme={'light'}
          onClick={() => {
            console.log('Add column click');
          }}
        />
      </ul>
    </section>
  );
};
