import styles from 'styles/index.module.scss';
import sprite from 'images/sprite.svg';
// import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
// import { addBoards, deleteBoards, getBoardById, updateBoard } from 'redux/board/boardOperations';
import { useState } from 'react';

const NewBoard = ({ boardTitle, handleSubmit }) => {
  const [title, setTitle] = useState();
  const [icon, setIcon] = useState();
  const [background, setBackground] = useState();


//   const dispatch = useDispatch();

  // const boardSchema = object({
  //       title: string().required('Title is required'),
  //       icon: string(),
  //       background: string(),
  //     });

  const onSubmit = e => {
    e.prevenDefault();

    const data = { title, icon, background };

    handleSubmit(data, boardTitle);
  };

  const changeTitle = e => {
    setTitle(e.target.value);
  };

  const changeIcon = e => {
    setIcon(e.target.value);
  };

  const changeBackground = newBg => {
    setBackground(newBg);
  };

  
  return (
    <>
      <Modal>
        <div className={styles.INAddBoardContainer}>
          <h3 className={styles.INBoardTitle}>New board</h3>
          <form>
            <input
              className={styles.INBoardInput}
              type="text"
              placeholder="Title"
              name="title"
              onChange={e => changeTitle}
              required
            />
            <h4 className={styles.INBoardSubtitle}>Icons</h4>
            <ul className={styles.INIconsGroup}>
              <li>
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

              <li>
                <label>
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

              <li>
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

              <li>
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

              <li>
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

              <li>
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

              <li>
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

              <li>
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
            <button
              className={styles.IMSubmitBtn}
              type="submit"
              onSubmit={onSubmit}
            >
              <div className={styles.IMBtnIconWrapper}>
                <svg className={styles.INAddIcon}>
                  <use href={sprite + '#icon-plus'} />
                </svg>
              </div>
              Create
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default NewBoard;
