import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoards } from '../../redux/board/boardSelectors';
import {
  updateBoard,
  deleteBoards,
} from '../../redux/board/boardOperations';
import { Modal } from '../Modal/Modal';
import { Link, useParams } from 'react-router-dom';
import ModalBoard from 'components/ModalBoard/ModalBoard';
import DeleteBoard from 'components/Sidebar/DeleteBoard';

import { useBoards } from 'hooks';
import { useNavigate } from 'react-router-dom';

const BoardsList = () => {
  const boards = useSelector(selectBoards);
  const firstBoardId = boards[0]._id;
  const { boardName } = useParams();
  const dispatch = useDispatch();
  const [showDeleteBoardModal, setshowDeleteBoardModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState(boardName || firstBoardId);
  const { boardById } = useBoards();
  const navigate = useNavigate();

  const togleDeleteModal = () => {
    setshowDeleteBoardModal(prev => !showDeleteBoardModal);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const clickOnBoardsItemHandle = boardId => {
    setActiveBoardId(boardId);
  };

  const deleteBoardFromList = activeBoardId => {
    setActiveBoardId(firstBoardId);
    if(activeBoardId===firstBoardId) {setActiveBoardId(boards[1]?._id)}
    console.log(activeBoardId)
    dispatch(deleteBoards(activeBoardId));
    navigate(`/home/${activeBoardId}`, { replace: false });
  };

  /* eslint-disable */
  useEffect(() => {
    setActiveBoardId(activeBoardId);
    console.log(activeBoardId)
    navigate(`/home/${activeBoardId}`, { replace: false });
  }, [activeBoardId]);
  /* eslint-enable */

  return (
    <>
      <ul className={scss.boardsList}>
        {boards.map(({ _id, title, icon }) => (
          <li className={scss.boardsListItem} key={_id}>
            <Link
              to={`/home/${_id}`}
              className={`${scss.boardsListItemWrap} ${
                activeBoardId === _id ? scss.boardsListItemFirst : ''
              } `}
              onClick={() => clickOnBoardsItemHandle(_id)}
            >
              <div type="button" className={scss.boardsListItemWrap}>
                <div className={scss.boardsListItemTitleGroup}>
                  <svg
                    className={scss.boardsListItemTitleSvg}
                    width="18px"
                    height="18px"
                  >
                    <use href={`${SvgSprite}#${icon}`}></use>
                  </svg>
                  <p className={scss.boardsListItemTitle}>{title}</p>
                </div>
                <div className={scss.boardsListItemActive}>
                  <div className={scss.boardsListItemButtons}>
                    <button
                      type="button"
                      className={scss.boardsListItemButton}
                      onClick={handleOpenModal}
                    >
                      <svg
                        className={scss.boardsListItemSvg}
                        width="16px"
                        height="16px"
                      >
                        <use href={`${SvgSprite}#icon-pencil`}></use>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className={scss.boardsListItemButton}
                      onClick={togleDeleteModal}
                    >
                      <svg
                        className={scss.boardsListItemSvg}
                        width="16px"
                        height="16px"
                      >
                        <use href={`${SvgSprite}#icon-trash`}></use>
                      </svg>
                    </button>
                  </div>
                  <div className={scss.boardsListActiveFlag}></div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalBoard
            modalTitle={'Edit board'}
            modalBtnTitle={'Edit'}
            onClose={handleCloseModal}
            operation={updateBoard}
            id={boardById._id}
            infoData={{
              title: boardById.title,
              icon: boardById.icon,
              background: boardById.background,
            }}
          />
        </Modal>
      )}
      {showDeleteBoardModal && (
        <Modal isOpen={showDeleteBoardModal} onClose={togleDeleteModal}>
          <DeleteBoard
            handleDeleteBoard={deleteBoardFromList}
            onClose={togleDeleteModal}
            activeBoardId={activeBoardId}
          />
        </Modal>
      )}
    </>
  );
};

export default BoardsList;
