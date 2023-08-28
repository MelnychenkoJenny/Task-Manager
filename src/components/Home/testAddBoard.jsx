import styles from 'styles/index.module.scss';
// import authOperations from 'redux/auth/authOperations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

const initialValues = {
  title: '',
  icon: '',
  background: '',
};



const boardSchema = object({
    title: string().required('Name is required'),
    icon: string(),
    background: string(),
});

const AddBoard = () => {
//   const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const dataBoard = { ...values };
console.log(dataBoard)
    // const res = await dispatch(authOperations.userRegistration(dataRegister));
    // if (res.error) {
    //   console.log(res.payload);
    // }
    resetForm();
  };

  return (
    <Formik
      validationSchema={boardSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form className={styles.AfWelcomRegForm}>
          <div className={styles.AfWelcomRegFormInCn}>
            <div className={styles.AfWelcomRegFormWrInp}>
              <Field
                autoFocus
                className={styles.AfWelcomRegFormInput}
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange('title')}
                value={values.title || ''}
                required
              />
            </div>
            <div className={styles.AfWelcomRegFormWrInp}>
              <Field
                className={styles.AfWelcomRegFormInput}
                type="text"
                name="icon"
                placeholder="Icon"
                onChange={handleChange('icon')}
                value={values.icon || ''}
                
              />
            </div>
            <div className={styles.AfWelcomRegFormWrInp}>
              <Field
                className={styles.AfWelcomRegFormInput}
                type="text"
                name="background"
                placeholder="background"
                onChange={handleChange('background')}
                value={values.background || ''}
                
              />
            </div>
          </div>
          <ErrorMessage
            className={styles.AfWelcomRegFormError}
            name="password"
            component="div"
          />
          <button type="submit" className={styles.AfWelcomRegFormButton}>
            Add new board
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AddBoard;
