import { useDispatch } from 'react-redux';
import scss from './LoginForm.module.scss';
import Eye from '../../images/sprite.svg#eye';

export const LoginForm = () => {
  return (
    <form className={scss.form} autoComplete="off">
      <a className={`${scss.link} ${scss.registrationLink}`}>Registration</a>{' '}
      <a className={scss.link}>Log In</a>
      <label className={scss.formLabel}>
        <input
          className={scss.formInput}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
      </label>
      <label className={`${scss.formLabel} ${scss.showPassword}`}>
        <input
          className={scss.formInput}
          id="password"
          type="password"
          name="password"
          placeholder="Confirm your password"
        />
        <svg className={scss.imgIcon} alt="watch password icon">
          <use href={Eye} />
        </svg>
      </label>
      <button className={scss.formSubmitBtn} type="submit">
        Register Now
      </button>
    </form>
  );
};

export default LoginForm;
