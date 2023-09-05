import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { useDispatch } from 'react-redux';
import { React, useState } from 'react';
import { Modal } from '../Modal/Modal';
import BoardsList from '../Sidebar/BoardsList';
import ModalBoard from '../ModalBoard/ModalBoard';
import helpCactus from 'images/help-cactus.png';
import helpCactus2 from 'images/help-cactus-2x.png';
import { logout } from '../../redux/auth/authOperations';
import { useAuth } from 'hooks';
import { addBoards } from 'redux/board/boardOperations';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
        data-theme={user.theme}
      >
        <nav className={scss.sidebar} data-theme={user.theme}>
          <div className={scss.sidebarHeaderWr} data-theme={user.theme}>
            <div className={scss.sidebarHeaderLogo} data-theme={user.theme}>
              <svg
                width="32px"
                height="32px"
                className={scss.sidebarHeaderLogoIcon}
                data-theme={user.theme}
              >
                <use href={`${SvgSprite}#icon-logo`}></use>
              </svg>
              <h2
                className={scss.sidebarHeaderLogoText}
                data-theme={user.theme}
              >
                Task Pro
              </h2>
            </div>
            <h3 className={scss.sidebarHeaderSubT} data-theme={user.theme}>
              My boards
            </h3>
            <div className={scss.sidebarHeaderNewBordWrapper}>
              <span className={scss.sidebarHeaderNewBordText}>
                Create a new board
              </span>
              <button
                onClick={handleOpenModal}
                className={scss.sidebarHeaderNewBordButton}
              >
                <svg width="20px" height="20px">
                  <use href={`${SvgSprite}#icon-plus`}></use>
                </svg>
              </button>
            </div>
          </div>
          <div className={scss.sidebarBoardListWr}>
            <BoardsList />
          </div>
          <div className={scss.sidebarBoardHelpWr}>
            <div className={scss.sidebarBoardHelpImg}>
              <picture>
                <source srcSet={`${helpCactus} 1x,${helpCactus2} 2x`} />
                <img
                  src={helpCactus}
                  width="54px"
                  height="78px"
                  alt="help cactus"
                />
              </picture>
            </div>
            <p className={scss.sidebarBoardHelpText}>
              If you need help with<br></br>
              <span className={scss.sidebarBoardHelpTextAccent}> TaskPro</span>,
              check out our <br></br> support resources or reach <br></br> out
              to our customer support team.
            </p>
            <button className={scss.sidebarBoardHelpButton}>
              <svg width="20px" height="20px" className={scss.sbNeedhelpSvg}>
                <use href={`${SvgSprite}#icon-help-circle`}></use>
              </svg>
              <span>Need help?</span>
            </button>
          </div>
          <div className={scss.sidebarBtnLogoutWr}>
            <button
              className={scss.sidebarBtnLogout}
              onClick={() => dispatch(logout())}
            >
              <svg width="32px" height="32px">
                <use href={`${SvgSprite}#icon-logout`}></use>
              </svg>
              <span>Log out</span>
            </button>
          </div>
        </nav>
      </aside>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalBoard modalTitle={'New Board'} modalBtnTitle={'Create'} onClose={handleCloseModal} operation={addBoards}/>
        </Modal>
      )}
    </>
  );
};

export default Sidebar;
