import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { loginSchema } from './loginSchema';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/authOperations';
import HandlingBackendErrors from 'utils/HandlingBackendErrors';
import { useAuth } from 'hooks';

const initialValues = {
  email: '',
  password: '',
  show: false,
};

const LoginForm = () => {
  const { loading } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showHidePassword, changeShowHidePassword] = useState(false);
  const [showError, addShowError] = useState('');

  const togglePassword = () => {
    changeShowHidePassword(!showHidePassword);
  };

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const dataLogin = { email, password };
    const res = await dispatch(userLogin(dataLogin));

    if (res.error) {
      const backendErr = HandlingBackendErrors(res.payload);
      addShowError(backendErr);
    } else {
      navigate('/home');
      resetForm();
    }
  };

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form autoComplete="off" className={styles.AfWelcomRegForm}>
          <div className={styles.AfWelcomRegFormNav}>
            <NavLink
              to="/auth/register"
              className={styles.AfWelcomLogFormNavReg}
            >
              Registration
            </NavLink>
            <NavLink to="/auth/login" className={styles.AfWelcomLogFormNavLog}>
              Log In
            </NavLink>
          </div>
          <div className={styles.AfWelcomBacError}>{showError}</div>

          <div className={styles.AfWelcomRegFormInCn}>
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
                onChange={handleChange('email')}
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
                  id="password"
                  type={showHidePassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Confirm your password"
                  onChange={handleChange('password')}
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
            Log In Now
            {loading && (
              <div className={styles.AfWelcomRegFormButtonLoad}></div>
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
