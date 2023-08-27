import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
// import authOperations from 'redux/auth/authOperations';
// import SignInInput from './LoginInput';

const initialValues = {
  email: '',
  password: '',
  show: false,
};

const loginSchema = object({
  email: string()
    .matches(
      /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Type in correct email'
    )
    .required(),
  password: string()
    .matches(/^[0-9a-zA-Z!@#$%^&*]{8,64}$/, 'Type in correct password')
    .required(),
});

const LoginForm = () => {
  const [showHidePassword, changeShowHidePassword] = useState(false);

  const togglePassword = () => {
    changeShowHidePassword(!showHidePassword);
    console.log(showHidePassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={styles.AfWelcomRegForm}>
        <div className={styles.AfWelcomRegFormNav}>
          <NavLink to="/auth/register" className={styles.AfWelcomLogFormNavReg}>
            Registration
          </NavLink>
          <NavLink to="/auth/login" className={styles.AfWelcomLogFormNavLog}>
            Log In
          </NavLink>
        </div>
        <div className={styles.AfWelcomRegFormInCn}>
          <div className={styles.AfWelcomRegFormWrInp}>
            <Field
              className={styles.AfWelcomRegFormInput}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.AfWelcomRegFormWrInp}>
            <Field
              className={styles.AfWelcomRegFormInput}
              id="password"
              type={showHidePassword ? 'text' : 'password'}
              name="password"
              placeholder="Confirm your password"
            />
            <svg
              className={styles.AfWelcomRegFormIconShowPass}
              alt="watch password icon"
              onClick={togglePassword}
            >
              <use href={SvgSprite + '#icon-eye'} />
            </svg>
          </div>
        </div>
        <ErrorMessage
          className={styles.AfWelcomRegFormError}
          name="password"
          component="div"
        />
        <button type="submit" className={styles.AfWelcomRegFormButton}>
          Log In Now
        </button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
