import styles from 'styles/index.module.scss';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addBoards, deleteBoards } from 'redux/board/boardOperations';

// import { object, string } from 'yup';
import { selectBoards } from 'redux/board/boardSelectors';

// const initialValues = {
//   title: '',
//   icon: '',
//   background: '',
// };

// const boardSchema = object({
//   title: string().required('Name is required'),
//   icon: string(),
//   background: string(),
// });

const AddBoard = () => {
  const dispatch = useDispatch();
  const  boards  = useSelector(selectBoards);
console.log(boards)
  // const handleSubmit = async (e) => {
    // console.log(e)
    // const dataBoard = { ...values };
    // console.log(1, dataBoard);
    // if (boards) {
    //   const res = await dispatch(addBoards(dataBoard));
    //   if (res.error) {
    //     console.log(res.payload);
    //   }
    //   return res;
    // }
    // resetForm();
    // console.log(3);
  // };
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const {title, icon, background} = event.target.elements;
    
const dataBoard = {title: title.value, icon: icon.value, background: background.value}
    dispatch(addBoards(dataBoard))
    form.reset();
  };

  return (
    <div>
      <input type='file'></input>
      {boards.length !==0 && (
        <ul style={{ display: 'flex', gap: '20px' }}>
          {boards.map(({ title, _id }) => {
            return (
              <li
                key={_id}
                style={{ padding: '5px', border: 'grey solid 2px' }}
              >
                <p>{title}</p>
                <button onClick={() => dispatch(deleteBoards(_id))}>
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <form onSubmit={handleSubmit} className={styles.AfWelcomRegForm}>
        <input
          autoFocus
          className={styles.AfWelcomRegFormInput}
          type="text"
          name="title"
          placeholder="Title"
          required
        ></input>
        <input
          autoFocus
          className={styles.AfWelcomRegFormInput}
          type="text"
          name="icon"
          placeholder="icon"
          required
        ></input>
        <input
          autoFocus
          className={styles.AfWelcomRegFormInput}
          type="text"
          name="background"
          placeholder="background"
          required
        ></input>
        <button type="submit" className={styles.AfWelcomRegFormButton}>
              Add new board
            </button>
      </form>

      {/* <Formik
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
      </Formik> */}
    </div>
  );
};
export default AddBoard;
