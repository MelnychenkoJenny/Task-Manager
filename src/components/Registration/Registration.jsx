import RegistrationForm from './RegistrationForm';
import styles from 'styles/index.module.scss';
import { useAuth } from 'hooks';

const Registration = () => {
  const { user } = useAuth();
  
  return (
    <section className={styles.AfWelcomReg} data-theme={user.theme}>
      <div className={styles.AfWelcomRegWr}>
        <RegistrationForm />
      </div>
    </section>
  );
};
export default Registration;
