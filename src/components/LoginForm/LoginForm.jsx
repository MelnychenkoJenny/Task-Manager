import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import scss from './LoginForm.module.scss';
import Eye from '../../images/sprite.svg#eye';

const initialValues = {
  email: '',
  password: '',
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
          <ErrorMessage className={scss.error} name="email" component="div" />
        </label>
        <label className={`${scss.formLabel} ${scss.showPassword}`}>
          <Field
            className={scss.formInput}
            id="password"
            type="password"
            name="password"
            placeholder="Confirm your password"
          />
          <ErrorMessage
            className={scss.error}
            name="password"
            component="div"
          />
          <svg className={scss.imgIcon} alt="watch password icon">
            <use href={Eye} />
          </svg>
        </label>
        <button className={scss.formSubmitBtn} type="submit">
          Register Now
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
