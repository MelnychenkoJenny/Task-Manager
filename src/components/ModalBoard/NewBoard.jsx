import styles from 'styles/index.module.scss';
import sprite from 'images/sprite.svg';
// import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
// import { addBoards, /*deleteBoards, getBoardById, updateBoard*/ } from 'redux/board/boardOperations';
 import { useState } from 'react';
 import { useAuth } from 'hooks';

const NewBoard = ({ modalTitle, handleSubmit, onClose }) => {

 const [title, setTitle] = useState();
const [icon, setIcon] = useState();
 const [background, setBackground] = useState()

 const {user} = useAuth()


//   const dispatch = useDispatch();

 // const boardSchema = object({
 //       title: string().required('Title is required'),
//       icon: string(),
    //  });

  const onSubmit = e => {
    e.prevenDefault();

    const data = { title, icon, background };

    handleSubmit(data, modalTitle);
  };

  const changeTitle = e => {
    setTitle(e.target.value);
  };

  const changeIcon = e => {
    setIcon(`#${e.target.value}`);
  };

  const changeBackground = newBg => {
    setBackground(newBg);
  };

  useEffect(() => {
    setTitle(modalTitle || "")
  }, [modalTitle])

  
  return (


      <Modal onClose={onClose}>

      <form className={styles.INAddBoardContainer} data-theme={user.theme}>
        <div className={styles.INAddBoardContainer}>
          <h3 className={styles.INBoardTitle}>New board</h3>
            <input
              className={styles.INBoardInput}
              type="text"
              placeholder="Title"
              name="title"
              onChange={e => changeTitle}
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
            </div >
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
              onSubmit={onSubmit}
            >
              <div className={styles.IMBtnIconWrapper}>
                <svg className={styles.INAddIcon}>
                  <use href={sprite + '#icon-plus'} />
                </svg>
              </div>
              Create
            </button>
        </div>
          </form>
       </Modal> 
  );
};

export default NewBoard;
