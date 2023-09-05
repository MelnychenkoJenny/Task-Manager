import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { React, useState, useEffect } from 'react';
import { Modal } from '../Modal/Modal';
import BoardsList from './BoardsList';
import ModalBoard from '../ModalBoard/ModalBoard';
import { addBoards } from 'redux/board/boardOperations';
import { selectBoards } from '../../redux/board/boardSelectors';
import {logout} from '../../redux/auth/authOperations';
import { useAuth } from 'hooks';


const Sidebar = () => {
   const dispatch = useDispatch();
     const { user } = useAuth();

   // const [showModal, setShowModal] = useState(false);
   const boards = useSelector(selectBoards);
   // const [showNeedHelpModal, setshowNeedHelpModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [iconStyle, seticonStyle] = useState('');
   console.log(user.theme);

// violet light dark
   // const togleModal = () => {
   //    setShowModal(prev => !showModal);
   // };

    useEffect(() => {
    if (!user.theme) return;
    if (user.theme.toLowerCase() === 'violet') {
      seticonStyle('icon-logo-violet');
      return;
    }
    seticonStyle('icon-logo-black');
  }, [user.theme]);

   const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
   //    const togleNeedHelpModal = () => {
   //    setshowNeedHelpModal(prev => !showNeedHelpModal);
   // };

   const clickBackDrop = e => {
      if (e.target === e.currentTarget) {
         e.currentTarget.style.display = 'none';
      }
   };

      return (
         <>
            <aside
               className={scss.sidebarContainer}
               onClick={clickBackDrop}
            >
               <div className={scss.sidebarWrap}>
                  <div className={scss.sidebar}>
                     <div className={scss.sbHeader}>
                        <svg width="32px" height="32px" className={scss.sbLogo}>
                           <use href={`${SvgSprite}#${iconStyle}`}></use>
                        </svg>
                        <h2 className={scss.sbTitle}>Task Pro</h2>
                     </div>
                     <h3 className={scss.sbSubtitle}>My boards</h3>
                     <div className={scss.sbBoards}>
                        <div className={scss.sbCreateBoardBlock}>
                           <span className={scss.sbCreateBoardText}>
                              Create a <br></br> new board
                           </span>
                           <button onClick={handleOpenModal} className={scss.sbCreateBoardButton}>
                              <svg
                                 width="20px"
                                 height="20px"
                                 className={scss.sbCreateBoardLogo}
                              >
                                 <use href={`${SvgSprite}#icon-plus`}></use>
                              </svg>
                           </button>
                        </div>
                     </div>
                     { (boards.length !== 0 &&
                        <BoardsList />)}
                     <div className={scss.sbHelp}>
                        <div className={scss.sbHelpPngCactus}></div>
                        <p className={scss.sbHelpText}>
                           If you need help with
                           <span className={scss.cbTaskProSpan}> TaskPro</span>, check out
                           our support resources or reach out to our customer support team.
                        </p>
                        <button
                           type='button'
                           className={scss.sbHelpButton}
                           // onClick={togleNeedHelpModal}
                        >
                           <svg width="20px" height="20px" className={scss.sbNeedhelpSvg}>
                              <use href={`${SvgSprite}#icon-help-circle`}></use>
                           </svg>{' '}
                           <span className={scss.sbNeedHelpButtonText}>Need help?</span>
                        </button>
                     </div>
                     <button
                        onClick={() => dispatch(logout())}
                        className={scss.sbLogoutButton}
                     >
                        <svg
                           width="32px"
                           height="32px"
                           className={scss.sbLogoutSvg}>
                           <use href={`${SvgSprite}#icon-logout`}></use>
                        </svg>
                        <span className={scss.sbLogoutText}>Log out</span>
                     </button>
                  </div>
               </div>
            </aside>
               {/* {showModal && (<Modal onClose={togleModal}>                  
          <ModalBoard modalTitle={'New Board'} modalBtnTitle={'Create'} onClose={togleModal} operation={addBoards}/>
        </Modal>
               )} */}
                {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalBoard modalTitle={'New Board'} modalBtnTitle={'Create'} onClose={handleCloseModal} operation={addBoards}/>
        </Modal>
      )}
            {/* {showNeedHelpModal && (<Modal onClose={togleNeedHelpModal}>                  
         <div style={{width:'100px', height:'100px', backgroundColor:'greenyellow'}}></div>
        </Modal>
               )} */}
                
         </>
      );
   };

        export default Sidebar;

