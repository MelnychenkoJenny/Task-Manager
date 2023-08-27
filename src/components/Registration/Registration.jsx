import RegistrationForm from './RegistrationForm';
import styles from 'styles/index.module.scss';

const Registration = () => {
  return (
    <section className={styles.AfWelcomReg}>
      <div className={styles.AfWelcomRegWr}>
        <RegistrationForm />
      </div>
    </section>
  );
};
export default Registration;
