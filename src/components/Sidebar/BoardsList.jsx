import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoards } from '../../redux/board/boardSelectors';
import { Modal } from '../Modal/Modal';
import { Link } from 'react-router-dom';
import NewBoard from 'components/ModalBoard/ModalBoard';
import {
  updateBoard,
  getAllBoards,
  deleteBoards,
} from 'redux/board/boardOperations';
import { useBoards } from 'hooks';

const BoardsList = () => {

  const boards = useSelector(selectBoards);
  const firstBoardId = boards[0]?._id;
  const dispatch = useDispatch();
  // const [showDeleteBoardModal, setshowDeleteBoardModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState(firstBoardId);
  const { boardById } = useBoards();
  //       const togleModal = () => {
  //     setshowDeleteBoardModal(!showDeleteBoardModal);
  //  };


    useEffect(() => {
      dispatch(getAllBoards())
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const clickOnBoardsItemHandle = boardId => {
    setActiveBoardId(boardId);
  };

  //   const deleteConfirmPopup = document.getElementById('deleteBoardConfirm');
  // console.log('deleteConfirmPopup :>> ', deleteConfirmPopup);
  // const deleteConfirmClose = () => {
  //   deleteConfirmPopup.classList.remove('showDeleteConfirm');
  // };

  // const deleteConfirmOpen = () => {
  //   deleteConfirmPopup.classList.add('showDeleteConfirm');
  // };

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  // const deleteBoardFromList = contactId => {
  //   dispatch(deleteBoards(contactId));
  // };

  return (
    <>
      <ul className={scss.boardsList}>
        {boards?.map(({ _id, title, icon }) => (
          <li className={scss.boardsListItem} key={_id}>
            <Link
              to={`/home/${_id}`}
              className={`${scss.boardsListItemWrap} ${
                firstBoardId === _id && firstBoardId === activeBoardId
                  ? scss.boardsListItemFirst
                  : ''
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
                      // onClick={() => {
                      //   deleteConfirmOpen();
                      // }}
                      onClick={() => dispatch(deleteBoards(_id))}
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

                  {/* <div
                    id="deleteBoardConfirm"
                    className={scss.deleteBoardConfirm}
                  >
                    <h3 className={scss.confirmDeleteTitle}>
                      Delete this board?
                    </h3>
                    <button
                      className={scss.confirmDeleteButton}
                      onClick={() => {
                        deleteBoardFromList(_id);
                        deleteConfirmOpen();
                      }}
                    >
                      YES
                    </button>
                    <button
                      className={scss.confirmDeleteButton}
                      onClick={togleModal}
                    >
                      NO
                    </button>
                  </div> */}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <NewBoard
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
      {/* {togleModal && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div style={{width:'100px', height:'100px'}}>Ok delete?</div>
      </Modal>
      )} */}
    </>
  );
};

export default BoardsList;
