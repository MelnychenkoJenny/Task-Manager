import { useDispatch } from 'react-redux';
import scss from './RegisterForm.module.scss';

export const RegisterForm = () => {

  return (
    <form className={scss.form} autoComplete="off">
      <a className={scss.link}>Registration</a> <a className={`${scss.link} ${scss.logInLink}`}>Log In</a>
      <label className={scss.formLabel}  >
        <input className={scss.formInput} type="name" name="name" placeholder="Enter your name"/>
      </label>
      <label className={scss.formLabel}>
        <input className={scss.formInput} type="email" name="email" placeholder="Enter your email"/>
      </label>
      <label className={scss.formLabel}>
        <input className={scss.formInput} type="password" name="password" placeholder="Create a password"/>
      </label>
      <button className={scss.formSubmitBtn} type="submit">Register Now</button>
    </form>
  );
};

export default RegisterForm;