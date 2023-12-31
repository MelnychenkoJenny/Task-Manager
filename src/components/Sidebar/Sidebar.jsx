import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { useDispatch } from 'react-redux';
import { React, useState, useEffect } from 'react';
import { Modal } from '../Modal/Modal';
import BoardsList from './BoardsList';
import ModalBoard from '../ModalBoard/ModalBoard';
import { addBoards } from 'redux/board/boardOperations';
// import { selectBoards } from '../../redux/board/boardSelectors';
import { useBoards } from 'hooks';
import { logout } from '../../redux/auth/authOperations';
import { useAuth } from 'hooks';
import NeedHelp from '../Sidebar/NeedHelp';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ click }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const { allBoards: boards } = useBoards();

  const [showNeedHelpModal, setshowNeedHelpModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iconStyle, seticonStyle] = useState('');
  const navigate = useNavigate();

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
  const togleNeedHelpModal = () => {
    setshowNeedHelpModal(prev => !showNeedHelpModal);
  };
  /* eslint-disable */
  useEffect(() => {
    if (boards.length === 0) {
      navigate(`/home`, { replace: false });
    }
  }, [boards]);
  /* eslint-enable */

  return (
    <>
      <aside className={scss.sidebarContainer} onClick={click}>
        <div className={scss.sidebarWrap}>
          <div className={scss.sidebar}>
            <div>
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
                  <button
                    onClick={handleOpenModal}
                    className={scss.sbCreateBoardButton}
                  >
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
              {boards.length !== 0 && <BoardsList />}
            </div>
            <div>
              <div className={scss.sbHelp} style={{ marginTop: '8px' }}>
                <div className={scss.sbHelpPngCactus}></div>
                <p className={scss.sbHelpText}>
                  If you need help with
                  <span className={scss.cbTaskProSpan}> TaskPro</span>, check
                  out our support resources or reach out to our customer support
                  team.
                </p>
                <button
                  type="button"
                  className={scss.sbHelpButton}
                  onClick={togleNeedHelpModal}
                >
                  <svg
                    width="20px"
                    height="20px"
                    className={scss.sbNeedhelpSvg}
                  >
                    <use href={`${SvgSprite}#icon-help-circle`}></use>
                  </svg>
                  <span className={scss.sbNeedHelpButtonText}>Need help?</span>
                </button>
              </div>
              <button
                onClick={() => dispatch(logout())}
                className={scss.sbLogoutButton}
              >
                <svg width="32px" height="32px" className={scss.sbLogoutSvg}>
                  <use href={`${SvgSprite}#icon-logout`}></use>
                </svg>
                <span className={scss.sbLogoutText}>Log out</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalBoard
            modalTitle={'New Board'}
            modalBtnTitle={'Create'}
            onClose={handleCloseModal}
            operation={addBoards}
          />
        </Modal>
      )}
      {showNeedHelpModal && (
        <Modal isOpen={showNeedHelpModal} onClose={togleNeedHelpModal}>
          <NeedHelp onClose={togleNeedHelpModal} />
        </Modal>
      )}
    </>
  );
};

export default Sidebar;
