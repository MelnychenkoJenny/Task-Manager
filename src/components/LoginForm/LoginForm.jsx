import { useDispatch } from 'react-redux';
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import scss from './LoginForm.module.scss';
import SvgSprite from '../../images/sprite.svg';

const initialValues = {
  email: '',
  password: '',
  show: false
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

export const LoginForm = () => {

  const [showHidePassword, changeShowHidePassword] = useState(false);

  const togglePassword = () => {
    changeShowHidePassword(!showHidePassword)
    console.log(showHidePassword)
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
      <Form className={scss.form} autoComplete="off">
        <a className={`${scss.link} ${scss.registrationLink}`}>Registration</a>{' '}
        <a className={scss.link}>Log In</a>
        <label className={scss.formLabel}>
          <Field
            className={scss.formInput}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          
        </label>
        <ErrorMessage className={scss.error} name="email" component="div" />
        <label className={`${scss.formLabel} ${scss.showPassword}`}>
          <Field
            className={scss.formInput}
            id="password"
            type={showHidePassword ? 'text' : 'password'}
            name="password"
            placeholder="Confirm your password"
          />
          
          <svg className={scss.imgIcon} alt="watch password icon" onClick={togglePassword}>
            <use href={SvgSprite + '#icon-eye'} />
          </svg>
        </label>
        <ErrorMessage
            className={scss.error}
            name="password"
            component="div"
          />
        <button className={scss.formSubmitBtn} type="submit">
          Register Now
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
