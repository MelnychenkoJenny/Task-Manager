import { useDispatch } from 'react-redux';
import scss from './RegisterForm.module.scss';
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

export const RegisterForm = () => {
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
      <Form className={scss.form} autoComplete="off">
        <a className={scss.link}>Registration</a>{' '}
        <a className={`${scss.link} ${scss.logInLink}`}>Log In</a>
        <label className={scss.formLabel}>
          <Field
            className={scss.formInput}
            type="name"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage className={scss.error} name="name" component="div" />
        </label>
        <label className={scss.formLabel}>
          <Field
            className={scss.formInput}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage className={scss.error} name="email" component="div" />
        </label>
        <label className={scss.formLabel}>
          <Field
            className={scss.formInput}
            type="password"
            name="password"
            placeholder="Create a password"
          />
          <ErrorMessage
            className={scss.error}
            name="password"
            component="div"
          />
        </label>
        <button className={scss.formSubmitBtn} type="submit">
          Register Now
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
