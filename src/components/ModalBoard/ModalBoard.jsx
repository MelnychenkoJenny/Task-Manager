import styles from 'styles/index.module.scss';
import sprite from 'images/sprite.svg';
import { useDispatch } from 'react-redux';
// import { selectBoards } from 'redux/board/boardSelectors';
import { useAuth } from 'hooks';
import {
  useState,
  // useEffect
} from 'react';

const NewBoard = ({
  modalTitle,
  modalBtnTitle,
  onClose,
  operation,
  id,
  infoData,
}) => {
  // потрібно створити селектор selectIsLoadingBoard
  // const isLoadingBoard = useSelector(selectIsLoadingBoard);
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const toggleModal = () => setIsOpenModal(state => !state);
  // const [title, setTitle] = useState('');
  // const [icon, setIcon] = useState('icon-project');
  // const [background, setBackground] = useState('background1');
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  
  const { user } = useAuth();
  // const theme = useSelector(selectTheme)
  const dispatch = useDispatch();

    //!! Цей стейт, який зберігає дані отримані з форми. Потрібен для Update модалки, щоб був контрольований інпут.
  const [valueInputUpdate, setvalueInputUpdate] = useState(infoData ? ({
    title: infoData.title,
    icon: infoData.icon,
    background: infoData.background,
  }) : ({
    title: '',
    icon: 'icon-loading',
    background: 'background1',
  }));
  // const boards = useSelector(selectBoards)

  // const boardSchema = object({
  //       title: string().required('Title is required'),
  //       icon: string(),
  //       background: string(),
  //     });

  // !!Контролюємо інпут
  const handleChange = event => {
    const { name, value } = event.target;
    setvalueInputUpdate(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // !!Сабміт форми, відправка різних діспатчей, в залежності від пропа operation
  const handleSubmit = e => {
    e.preventDefault();
    const dataSubmit = !id
      ? valueInputUpdate
      : { ...valueInputUpdate, id };  
    dispatch(operation(dataSubmit));
    onClose();
  };

  // const changeIcon = e => {
  //   setIcon(`#${e.target.value}`);
  // };

  // const changeBackground = newBg => {
  //   if (newBg === undefined || !newBg) {
  //     setBackground('null');
  //   }

  //   setBackground(newBg);
  // };

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
        value={valueInputUpdate.title || ''}
        onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
              <input style={{width:'15px', height:'17px', background:'lightBlue'}}
                className={styles.INRadioBtn}
                type="radio"
                name="background"
                value="background1"
                onChange={handleChange}
              />
            </label>
          </li>
        </ul>
      </div>
      <button
        className={styles.IMSubmitBtn}
        type="submit"
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
