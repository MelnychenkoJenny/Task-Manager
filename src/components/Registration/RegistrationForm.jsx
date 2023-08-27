// import { useState } from 'react';
import styles from 'styles/index.module.scss';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import authOperations from 'redux/auth/authOperations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const registerSchema = object({
  name: string()
    .matches(/^[0-9a-zA-Z!@#$%^&*]{2,32}$/, 'Type in correct name')
    .trim(),
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

const RegistrationForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      validationSchema={registerSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={styles.AfWelcomRegForm}>
        <div className={styles.AfWelcomRegFormNav}>
          <NavLink to="/auth/register" className={styles.AfWelcomRegFormNavReg}>
            Registration
          </NavLink>
          <NavLink to="/auth/login" className={styles.AfWelcomRegFormNavLog}>
            Log In
          </NavLink>
        </div>
        <div className={styles.AfWelcomRegFormInCn}>
          <div className={styles.AfWelcomRegFormWrInp}>
            <Field
              className={styles.AfWelcomRegFormInput}
              type="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
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
              type="password"
              name="password"
              placeholder="Create a password"
            />
          </div>
        </div>
        <ErrorMessage
          className={styles.AfWelcomRegFormError}
          name="password"
          component="div"
        />
        <button type="submit" className={styles.AfWelcomRegFormButton}>
          Register Now
        </button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
