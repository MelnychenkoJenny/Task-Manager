import SignInForm from './LoginForm';
import styles from 'styles/index.module.scss';
import { useAuth } from 'hooks';

const Login = () => {
  const { user } = useAuth();

  return (
    <section className={styles.AfWelcomReg} data-theme={user.theme}>
      <div className={styles.AfWelcomRegWr}>
        <SignInForm />
      </div>
    </section>
  );
};
export default Login;
