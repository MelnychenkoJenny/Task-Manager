import styles from 'styles/index.module.scss';
import sprite from 'images/sprite.svg';
import { useDispatch } from 'react-redux';
// import { selectBoards } from 'redux/board/boardSelectors';
import { addBoards } from 'redux/board/boardOperations';
import { useAuth } from 'hooks';
import {
  useState,
  // useEffect
} from 'react';

const NewBoard = ({ modalTitle, modalBtnTitle }) => {
  // потрібно створити селектор selectIsLoadingBoard
  // const isLoadingBoard = useSelector(selectIsLoadingBoard);
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const toggleModal = () => setIsOpenModal(state => !state);
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('icon-project');
  const [background, setBackground] = useState('background1');
  const { user } = useAuth();
  // const theme = useSelector(selectTheme)
  const dispatch = useDispatch();
  // const boards = useSelector(selectBoards)

  // const boardSchema = object({
  //       title: string().required('Title is required'),
  //       icon: string(),
  //       background: string(),
  //     });

  const handleSubmit = e => {
    e.preventDefault();
    const iconSl = icon.slice(1);

    const data = { title, icon: iconSl, background };

    // handleSubmit(data, modalTitle);
    // dispatch(
    //   addBoards({
    //     title: title,
    //     icon: icon,
    //     background: 'background2',
    //   })
    // );
    dispatch(addBoards(data));
  };

  const changeIcon = e => {
    setIcon(`#${e.target.value}`);
  };

  const changeBackground = newBg => {
    if (newBg === undefined || !newBg) {
      setBackground('null');
    }

    setBackground(newBg);
  };

  // useEffect(() => {
  //   setTitle(modalTitle || '');
  // }, [modalTitle]);

  return (
    <form
      className={styles.INAddBoardContainer}
      data-theme={user.theme}
      onSubmit={handleSubmit}
    >
      <h3 className={styles.INBoardTitle}>{modalTitle}</h3>
      <input
        className={styles.INBoardInput}
        type="text"
        placeholder="Title"
        name="title"
        onChange={e => setTitle(e.target.value)}
        required
      />
      <div className={styles.INIconsWraper}>
        <h4 className={styles.INBoardSubtitle}>Icons</h4>
        <ul className={styles.INIconsGroup}>
          <li className={styles.INListItem}>
            <label>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-project"
                onChange={e => changeIcon(e)}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-project'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label className={styles.INListItem}>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-star"
                onChange={e => changeIcon(e)}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-star'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-loading"
                onChange={e => changeIcon(e)}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-loading'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-puzzle"
                onChange={e => changeIcon(e)}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-puzzle'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-container"
                onChange={e => changeIcon(e)}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-container'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-lightning"
                onChange={e => changeIcon(e)}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-lightning'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-colors"
                onChange={e => changeIcon(e)}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-colors'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-hexagon"
                onChange={e => changeIcon(e)}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-hexagon'} />
              </svg>
            </label>
          </li>
        </ul>
      </div>
      <div className={styles.INIconsWraper}>
        <h4 className={styles.INBoardSubtitle}>Background</h4>
        {/* додати перелік іконок для BG type="radio */}
        <ul>
          <li>
            <label>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="bgImage"
                onChange={() => changeBackground()}
              />
            </label>
          </li>
        </ul>
      </div>
      <button
        className={styles.IMSubmitBtn}
        type="submit"
        onSubmit={handleSubmit}
      >
        <div className={styles.IMBtnIconWrapper}>
          <svg className={styles.INAddIcon}>
            <use href={sprite + '#icon-plus'} />
          </svg>
        </div>
        {modalBtnTitle && modalBtnTitle}
      </button>
    </form>
  );
};

export default NewBoard;
