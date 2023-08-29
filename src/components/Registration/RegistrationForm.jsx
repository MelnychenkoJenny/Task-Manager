// import { useState } from 'react';
import styles from 'styles/index.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { registerSchema } from './registerSchema';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {

    const dataRegister = { ...values };

    const res = await dispatch(authOperations.userRegistration(dataRegister));
    if (res.error) {
      console.log(res.payload);
    } else {
      navigate('/home');
    }
    resetForm();
  };

  return (
    <Formik
      validationSchema={registerSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form className={styles.AfWelcomRegForm}>
          <div className={styles.AfWelcomRegFormNav}>
            <NavLink
              to="/auth/register"
              className={styles.AfWelcomRegFormNavReg}
            >
              Registration
            </NavLink>
            <NavLink to="/auth/login" className={styles.AfWelcomRegFormNavLog}>
              Log In
            </NavLink>
          </div>
          <div className={styles.AfWelcomRegFormInCn}>
            <div className={styles.AfWelcomRegFormWrInp}>
              <Field
                autoFocus
                className={styles.AfWelcomRegFormInput}
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange('name')}
                value={values.name || ''}
                required
              />
            </div>
            <div className={styles.AfWelcomRegFormWrInp}>
              <Field
                className={styles.AfWelcomRegFormInput}
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange('email')}
                value={values.email || ''}
                required
              />
            </div>
            <div className={styles.AfWelcomRegFormWrInp}>
              <Field
                className={styles.AfWelcomRegFormInput}
                type="password"
                name="password"
                placeholder="Create a password"
                onChange={handleChange('password')}
                value={values.password || ''}
                required
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
      )}
    </Formik>
  );
};
export default RegistrationForm;
