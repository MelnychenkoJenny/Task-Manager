import styles from 'styles/index.module.scss';
import { BtnAddColumn } from './BtnAddColumn';
import { Filters } from './Filters';

export const MainDashboard = () => {
  return (
    <section className={styles.KkSectionMainDashboard}>
      <Filters className={styles.KkFilters} />
      <BtnAddColumn className={styles.TestTest} title={'Add another column'} />
      <BtnAddColumn className={styles.TestTest} title={'Add column'} />
    </section>
  );
};
