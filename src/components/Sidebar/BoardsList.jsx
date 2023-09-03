import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoards } from '../../redux/board/boardSelectors';
import { getAllBoards, deleteBoards } from '../../redux/board/boardOperations';
import { Modal } from '../Modal/Modal';
import { Link } from 'react-router-dom';

const BoardsList = () => {
  const boards = useSelector(selectBoards);
  const firstBoardId = boards[0]?._id;
  const dispatch = useDispatch();
  const [showEditBoardModal, setshowEditBoardModal] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState(firstBoardId);

  const togleModal = () => {
    setshowEditBoardModal(prev => !showEditBoardModal);
  };

  const clickOnBoardsItemHandle = boardId => {
    setActiveBoardId(boardId);
  };

  const deleteConfirmPopup = document.getElementById('deleteBoardConfirm');

  // const deleteConfirmClose = () => {
  //   deleteConfirmPopup.classList.remove('showDeleteConfirm');
  // };

  const deleteConfirmOpen = () => {
    deleteConfirmPopup.classList.add('showDeleteConfirm');
  };

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  const deleteBoardFromList = contactId => {
    dispatch(deleteBoards(contactId));
  };

  return (
    <ul className={scss.boardsList}>
      {boards?.map(({ _id, title, icon }) => (
        <li className={scss.boardsListItem}>
          <Link
            to={`/home/${_id}`}
            key={_id}
            className={`${scss.boardsListItemWrap} ${
              firstBoardId === _id && firstBoardId === activeBoardId
                ? scss.boardsListItemFirst
                : ''
            } `}
            onClick={() => clickOnBoardsItemHandle(_id)}
          >
            <button type="button" className={scss.boardsListItemWrap}>
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
                    onClick={togleModal}
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
                    onClick={() => {
                      deleteConfirmOpen();
                    }}
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

                <div
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
                </div>
              </div>
            </button>
          </Link>
        </li>
      ))}

      {showEditBoardModal && (
        <Modal onClose={togleModal}>
          <div
            style={{ width: '200px', height: '200px', background: 'red' }}
            className={scss.boardsListActiveFlag}
          ></div>
        </Modal>
      )}
    </ul>
  );
};

export default BoardsList;
