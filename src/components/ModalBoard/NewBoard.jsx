import styles from 'styles/index.module.scss';
import sprite from 'images/sprite.svg';
import { useDispatch } from 'react-redux';
// import { selectBoards } from 'redux/board/boardSelectors';
import { Modal } from 'components/Modal/Modal';
import { addBoards } from 'redux/board/boardOperations';

const NewBoard = () => {
  // потрібно створити селектор selectIsLoadingBoard
  // const isLoadingBoard = useSelector(selectIsLoadingBoard);
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const toggleModal = () => setIsOpenModal(state => !state);
  // const [title, setTitle] = useState("");
  // const [icon, setIcon] = useState("icon-project");
  // const [background, setBackground] = useState(second)
  // потрібно створити селектор вибору теми
  // const theme = useSelector(selectTheme)

  const dispatch = useDispatch();
  // const boards = useSelector(selectBoards)

  // const boardSchema = object({
  //       title: string().required('Title is required'),
  //       icon: string(),
  //       background: string(),
  //     });

  const onSubmit = e => {
    e.prevenDefault();
    const form = e.target;
    const { title, icon, background } = e.target.elements;

    const dataBoard = {
      title: title.value,
      icon: icon.value,
      background: background.value,
    };
    dispatch(addBoards(dataBoard));
    form.reset();
  };
  // dispatch(
  //     addBoard({
  //         title,
  //         icon,
  //         background: background || "default",
  //     })
  // ).then(() => {
  //     if (!isLoadingBoard) {
  //         toggleModal();
  //         setTitle("");
  //         setIcon("icon-project");
  //         setBackground("default")
  //     }
  // })
  // };

  // const changeIcon = newIcon => {
  //     setIcon(newIcon);
  // }

  // const changeBackground = newBg => {
  //     setBackground(newBg)
  // }

  // const changeTitle = e => {
  //     setTitle(e.target.value)
  // }

  // return (
  //     <div>
  //         <button onClick={toggleModal} type="button">
  //             <svg width={36} height={36}>
  //                 {/* <use href={sprite + '#icon-plus'}></use> */}
  //             </svg>
  //         </button>
  //         {isOpenModal && (
  //             <Modal onClose={toggleModal}>
  //                 <form onSubmit={onSubmit}>
  //                     <h1>New board</h1>

  //                     <input
  //                     id="title"
  //                     type="title"
  //                     name="title"
  //                     placeholder={title}
  //                     value={title}
  //                     onChange={changeTitle}
  //                     />
  //                     <div id="icon-label">
  //                         Icons
  //                         <fieldset role='group' aria-labelledby="icon-label">
  //                             {icons.map(item => (
  //                                 <div key={item.value}>
  //                                     <input
  //                                     id={item.value}
  //                                     type='radio'
  //                                     name={item.value}
  //                                     checked={icon === item.value}
  //                                     onChange={() => changeIcon(item.value)}
  //                                     />
  //                                     <label
  //                                     htmlFor={item.value}
  //                                     onClick={() => changeIcon(item.value) }
  //                                     >
  //                                     <svg>
  //                                         {/* <use href={sprite + `#${item.value}`}></use> */}
  //                                     </svg>
  //                                     </label>
  //                                 </div>
  //                             ))}
  //                         </fieldset>
  //                     </div>

  //                     <div id="icon-label">
  //                         Background
  //                         <fieldset role='group' aria-labelledby="icon-label">

  //                             {/* описати логіку вибору background */}

  //                         </fieldset>
  //                     </div>

  //                     <button type='submit' onClick={onSubmit}>

  //                         Create
  //                     </button>

  //                 </form>
  //             </Modal>
  //         )}
  //     </div>
  // )
  return (
    <>
      <Modal>
        <div className={styles.INAddBoardContainer}>
          <h3 className={styles.INBoardTitle}>New board</h3>
          <form>
            <input className={styles.INBoardInput} type="text" required />
            <h4 className={styles.INBoardSubtitle}>Icons</h4>
            <div className={styles.INIconsGroup}>
              {/* /* додати type="radio */}
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-project'} />
              </svg>
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-star'} />
              </svg>
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-loading'} />
              </svg>
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-puzzle'} />
              </svg>
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-container'} />
              </svg>
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-lightning'} />
              </svg>
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-colors'} />
              </svg>
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-hexagon'} />
              </svg>
            </div>
            <h4 className={styles.INBoardSubtitle}>Background</h4>
            {/* додати перелік іконок для BG type="radio */}

            <button
              className={styles.IMSubmitBtn}
              type="submit"
              onSubmit={onSubmit}
            >
              <div className={styles.IMBtnIconWrapper}>
                <svg className={styles.INAddIcon} >
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
