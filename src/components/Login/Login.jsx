import SignInForm from './LoginForm';
import styles from 'styles/index.module.scss';
const Login = () => {
  return (
    <section className={styles.AfWelcomReg}>
      <div className={styles.AfWelcomRegWr}>
        <SignInForm />
      </div>
    </section>
  );
};
export default Login;
