import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoards } from '../../redux/board/boardSelectors';
import {
   updateBoard,
   getAllBoards,
   deleteBoards
} from '../../redux/board/boardOperations';
import { Modal } from '../Modal/Modal';
import { Link } from 'react-router-dom';
import ModalBoard from 'components/ModalBoard/ModalBoard';
import DeleteBoard from 'components/Sidebar/DeleteBoard';

import { useBoards } from 'hooks';
import { useNavigate } from 'react-router-dom';

const BoardsList = () => {
   const boards = useSelector(selectBoards);
   const firstBoardId = boards[0]._id;
   const dispatch = useDispatch();
   const [showDeleteBoardModal, setshowDeleteBoardModal] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [activeBoardId, setActiveBoardId] = useState(firstBoardId);
   // const [deleteConfirm, setDeleteConfirm] = useState(false);
   const { boardById } = useBoards();
   const navigate = useNavigate();
   const togleDeleteModal = () => {
      setshowDeleteBoardModal(prev => !showDeleteBoardModal);
   };

   // const deleteConfirmTogle = () => {
   //    setDeleteConfirm(prev => !deleteConfirm);
   // }

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
         navigate(`/home/${firstBoardId}`, { replace: false });
         dispatch(deleteBoards(activeBoardId));
   };

   // const refreshBoardsList = () => {
      // setActiveBoardId(firstBoardId);
   //    dispatch(getAllBoards());
   // };

   useEffect(() => {
      dispatch(getAllBoards());
   }, [dispatch]); 
   /* eslint-disable */

   useEffect(() => {
      setActiveBoardId(firstBoardId);
      navigate(`/home/${firstBoardId}`, { replace: false });
   }, [firstBoardId]); 
   /* eslint-enable */

   return (
<>
      <ul className={scss.boardsList}>                  
         {boards.map(({_id, title, icon}) => (
         <li
            className={scss.boardsListItem}
            key={_id}
         >
            <Link
               to={`/home/${_id}`}
                  className={`${scss.boardsListItemWrap} ${(firstBoardId === _id && firstBoardId === activeBoardId)
                  ? scss.boardsListItemFirst
                  : ''
                  } `}
                  onClick={() => clickOnBoardsItemHandle(_id)}
            >                     
         <div type='button' className={scss.boardsListItemWrap}>
            <div className={scss.boardsListItemTitleGroup}>
               <svg
                  className={scss.boardsListItemTitleSvg}
                  width="18px"
                  height="18px">
                     <use href={`${SvgSprite}#${icon}`}></use>
               </svg>
            <p className={scss.boardsListItemTitle}>
                            {title}
            </p>
            </div>
            <div className={scss.boardsListItemActive}>
               <div className={scss.boardsListItemButtons}>
                  <button
                     type='button'
                     className={scss.boardsListItemButton}
                     onClick = {handleOpenModal}
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
                     type='button'
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
        <Modal onClose={togleDeleteModal}>
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