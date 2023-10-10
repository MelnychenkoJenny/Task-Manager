import { useState } from 'react';
import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { userRegistration } from 'redux/auth/authOperations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { registerSchema } from './registerSchema';
import HandlingBackendErrors from 'utils/HandlingBackendErrors';
import { useAuth } from 'hooks';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const { loading } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const [showError, addShowError] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    const dataRegister = { ...values };
    const res = await dispatch(userRegistration(dataRegister));
    if (res.error) {
      const backendErr = HandlingBackendErrors(res.payload);
      console.log('response', res.payload)
      addShowError(backendErr);
    } else {
      navigate('/home');
      resetForm();
    }
  };

  const togglePassword = () => {
    changeShowHidePassword(!showHidePassword);
    // console.log(showHidePassword);
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
          <div className={styles.AfWelcomBacError}>{showError}</div>
          <div className={styles.AfWelcomRegFormInCn}>
            <div className={styles.AfWelcomRegFormWrInp}>
              <div className={styles.AfWelcomFormWrError}>
                <ErrorMessage
                  className={styles.AfWelcomFormError}
                  name="name"
                  component="div"
                />
              </div>

              <Field
                autoFocus
                className={styles.AfWelcomRegFormInput}
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange('name')}
                value={values.name.trim() || ''}
                title="Name may contain letters and numbers, apostrophe, dash and spaces. For example Adrian, Jacob Mercer2, Charles de Batz d'Artagnan"
                required
              />
            </div>
            <div className={styles.AfWelcomRegFormWrInp}>
              <div className={styles.AfWelcomFormWrError}>
                <ErrorMessage
                  className={styles.AfWelcomFormError}
                  name="email"
                  component="div"
                />
              </div>

              <Field
                className={styles.AfWelcomRegFormInput}
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  const trimmedValue = e.target.value.trim();
                  handleChange('email')(trimmedValue);
                }}
                onBlur={(e) => {
                  const trimmedValue = e.target.value.trim();
                  handleChange('email')(trimmedValue);
                }}
                // onChange={handleChange('email')}
                // onChange={(e) => {
                //   const trimmedValue = e.target.value.trim();
                //   handleChange('email')(trimmedValue);
                // }}
                value={values.email.trim() || ''}
                title="Email must be in Latin characters, include @ symbol, and have text after the dot. For example: email@gmail.com"
                required
              />
            </div>
            <div className={styles.AfWelcomRegFormWrInp}>
              <div className={styles.AfWelcomFormWrError}>
                <ErrorMessage
                  className={styles.AfWelcomFormError}
                  name="password"
                  component="div"
                />
              </div>
              <div className={styles.AfWelcomShowPassWr}>
                <Field
                  className={styles.AfWelcomRegFormInput}
                  type={showHidePassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create a password"
                  onChange={handleChange('password')}
                  value={values.password.trim() || ''}
                  title="Password must be between 6 and 32 characters"
                  required
                />
                <svg
                  className={styles.AfWelcomFormIconShowPass}
                  alt="watch password icon"
                  onClick={togglePassword}
                >
                  <use href={SvgSprite + '#icon-eye'} />
                </svg>
              </div>
            </div>
          </div>

          <button type="submit" className={styles.AfWelcomRegFormButton}>
            Register Now
            {loading && (
              <div className={styles.AfWelcomRegFormButtonLoad}></div>
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default RegistrationForm;
