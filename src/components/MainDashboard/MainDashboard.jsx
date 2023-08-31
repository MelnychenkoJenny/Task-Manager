// 💙💛 Kostiantyn Koshyk
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
      titleCards: 'Column Title 01',
      cards: [
        {
          id: '01',
          titleCard: 'Card Title 01',
          description:
            'Create visually appealing and functional design prototypes based on the pproved concepts',
          priority: 'medium',
          deadline: '31/08/2023',
        },
        {
          id: '02',
          titleCard: 'Card Title 02',
          description:
            'Conduct in-depth research and analysis on the project topic, gather relevant data, and identify',
          priority: 'without',
          deadline: '01/09/2023',
        },
        {
          id: '03',
          titleCard: 'Card Title 03',
          description:
            'In this example, the .limited-text class is applied to the <p> element. The max-height is set to the height of two lines of text (you might need to adjust this value based on your font size and line height). The overflow: hidden hides any content that overflows the specified height, and text-overflow: ellipsis adds the three dots (...) to indicate overflow.',
          priority: 'medium',
          deadline: '02/09/2023',
        },
        {
          id: '04',
          titleCard: 'Card Title 04',
          description:
            'Conduct in-depth research and analysis on the project topic, gather relevant data, and identify',
          priority: 'medium',
          deadline: '02/09/2023',
        },
        {
          id: '05',
          titleCard: 'Card Title 05',
          description:
            'Conduct in-depth research and analysis on the project topic, gather relevant data, and identify',
          priority: 'low',
          deadline: '31/08/2023',
        },
      ],
    },
    {
      id: '02',
      titleCards: 'Column Title 02',
      cards: [
        {
          id: '01',
          titleCard: 'Card Title 01',
          description:
            'Create visually appealing and functional design prototypes based on the pproved concepts',
          priority: 'high',
          deadline: '01/09/2023',
        },
        {
          id: '02',
          titleCard: 'Card Title 02',
          description:
            'Conduct in-depth research and analysis on the project topic, gather relevant data, and identify',
          priority: 'low',
          deadline: '31/08/2023',
        },
      ],
    },
    {
      id: '03',
      titleCards: 'Column Title 03',
      cards: [
        {
          id: '01',
          titleCard: 'Card Title 01',
          description:
            'Create visually appealing and functional design prototypes based on the pproved concepts',
          priority: 'low',
          deadline: '31/08/2023',
        },
        {
          id: '02',
          titleCard: 'Card Title 02',
          description:
            'Conduct in-depth research and analysis on the project topic, gather relevant data, and identify',
          priority: 'high',
          deadline: '01/09/2023',
        },
      ],
    },
    {
      id: '04',
      titleCards: 'Column Title 04',
      cards: [
        {
          id: '01',
          titleCard: 'Card Title 01',
          description:
            'Create visually appealing and functional design prototypes based on the pproved concepts',
          priority: 'without',
          deadline: '01/09/2023',
        },
      ],
    },
  ]);

  const onAddColumn = () => {
    console.log('Add Column click');
  };

  return (
    <section className={styles.KkSectionMainDashboard}>
      <Filters
        className={styles.KkFilters}
        titleBoard={'Board Title'}
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
          onClick={onAddColumn}
        />
      </ul>
    </section>
  );
};
