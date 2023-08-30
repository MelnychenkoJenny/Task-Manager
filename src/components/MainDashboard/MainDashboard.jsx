import styles from 'styles/index.module.scss';
// import { BtnAddColumn } from './BtnAddColumn';
import { Filters } from './Filters';
import { TaskColumn } from './TaskColumn';

export const MainDashboard = () => {
  return (
    <section className={styles.KkSectionMainDashboard}>
      <Filters
        className={styles.KkFilters}
        titleBoard={'Title Board'}
        theme={'light'}
      />

      <TaskColumn className={styles.KkTaskColumn} />
    </section>
  );
};
