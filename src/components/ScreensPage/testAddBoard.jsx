import styles from 'styles/index.module.scss';
import scss from '../../styles/index.module.scss';
import sprite from '../../images/sprite.svg';

// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import {
  addBoards,
  deleteBoards,
  getBoardById,
  updateBoard,
} from 'redux/board/boardOperations';
import { useBoards } from 'hooks';
import { useEffect, useState } from 'react';
// import { object, string } from 'yup';
import { useAuth } from 'hooks';
import { updateTheme } from 'redux/auth/authOperations';

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
  const [themeActive, setThemeActive] = useState(false);

  const { allBoards, boardById } = useBoards();
  const { user } = useAuth();

  const dispatch = useDispatch();
  const [valueInputUpdate, setvalueInputUpdate] = useState({
    title: '',
    icon: '',
    background: '',
  });
  const [avatarURL, setAvatarURL] = useState('');
  const [currentImage, setCurrentImage] = useState(user.avatarURL);

  useEffect(() => {
    setvalueInputUpdate({
      title: boardById.title,
      icon: boardById.icon,
      background: boardById.background,
    });
  }, [boardById]);

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
    const { title, icon, background } = event.target.elements;

    const dataBoard = {
      title: title.value,
      icon: icon.value,
      background: background.value,
    };
    dispatch(addBoards(dataBoard));
    form.reset();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setvalueInputUpdate(prevBoard => ({
      ...prevBoard,
      [name]: value,
    }));
  };

  const handleSubmitUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const { title, icon, background } = event.target.elements;

    const dataBoard = {
      _id: boardById._id,
      title: title.value,
      icon: icon.value,
      background: background.value,
    };
    console.log(dataBoard);
    dispatch(updateBoard(dataBoard));
    form.reset();
  };

  function handleFileChange(event) {
    const file = event;
    if (!file) {
      return;
    }
    setAvatarURL(file);
    const reader = new FileReader();

    reader.onload = function (e) {
      setCurrentImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  const handleClick = () => {
    setThemeActive(!themeActive);
  };

  const handleClickTheme = theme => {
    if (theme === 'light' || theme === 'dark' || theme === 'violet') {
      if(theme === user.theme && !theme) {
        return
      }
      dispatch(updateTheme(theme));
    }
  };

  return (
    <div>
      <div className={scss.dropdownThemeWrap}>
        <div className={scss.themeHeaderWrap}>
          <p className={scss.themeText}>Theme</p>
          <button
            type="button"
            className={scss.btnThemeOpen}
            onClick={handleClick}
          >
            <svg className={scss.svgTheme} width="16" height="16">
              <use href={`${sprite}#icon-chevron-down`}></use>
            </svg>
          </button>
        </div>
        {themeActive && (
          <div
            className={scss.dropdownThemeMenu}
            style={{ position: 'relative' }}
          >
            <ul className={scss.dropdownThemeList}>
              <li
                className={scss.themeMenuItem}
                onClick={() => {
                  handleClickTheme('light');
                }}
              >
                Light
              </li>
              <li
                className={scss.themeMenuItem}
                onClick={() => {
                  handleClickTheme('dark');
                }}
              >
                Dark
              </li>
              <li
                className={scss.themeMenuItem}
                onClick={() => {
                  handleClickTheme('violet');
                }}
              >
                Violet
              </li>
            </ul>
          </div>
        )}
      </div>

      <div>{boardById && <p>Title active board:{boardById.title}</p>}</div>
      <input
        type="file"
        name="avatarURL"
        onChange={event => {
          handleFileChange(event.currentTarget.files[0]);
        }}
        accept="image/*,.png,.jpg,.gif,.web"
      ></input>
      <img
        alt="user avatar"
        src={currentImage || avatarURL}
        srcSet={currentImage || `${avatarURL} 1x, ${avatarURL} 2x`}
      />

      {allBoards?.length !== 0 && (
        <ul style={{ display: 'flex', gap: '20px' }}>
          {allBoards?.map(({ title, _id, icon, background }) => {
            return (
              <li
                key={_id}
                style={{ padding: '5px', border: 'grey solid 2px' }}
                onClick={() => dispatch(getBoardById(_id))}
              >
                <p>Title: {title}</p>
                <p>{icon}</p>
                <p>{background}</p>
                <button onClick={() => dispatch(deleteBoards(_id))}>
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <form onSubmit={handleSubmitUpdate} className={styles.AfWelcomRegForm}>
        <h2 style={{ color: 'white' }}>Update board</h2>
        <input
          autoFocus
          className={styles.AfWelcomRegFormInput}
          type="text"
          name="title"
          placeholder={'Title'}
          value={valueInputUpdate.title || ''}
          onChange={handleChange}
          required
        ></input>
        <input
          autoFocus
          className={styles.AfWelcomRegFormInput}
          type="text"
          name="icon"
          placeholder="icon"
          value={valueInputUpdate.icon || ''}
          onChange={handleChange}
        ></input>
        <input
          autoFocus
          className={styles.AfWelcomRegFormInput}
          type="text"
          name="background"
          placeholder="background"
          value={valueInputUpdate.background || ''}
          onChange={handleChange}
        ></input>
        <button type="submit" className={styles.AfWelcomRegFormButton}>
          Update board
        </button>
      </form>

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
        ></input>
        <input
          autoFocus
          className={styles.AfWelcomRegFormInput}
          type="text"
          name="background"
          placeholder="background"
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
