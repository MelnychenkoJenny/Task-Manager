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
import NewBoard from 'components/ModalBoard/ModalBoard';
import ModalBoard from 'components/ModalBoard/ModalBoard';
import {
  updateBoard,
  getAllBoards,
  deleteBoards,
} from 'redux/board/boardOperations';
import { useBoards } from 'hooks';
// import { useNavigate } from 'react-router-dom';

const BoardsList = () => {
   const boards = useSelector(selectBoards);
   const firstBoardId = boards[0]._id;
   const dispatch = useDispatch();
   const [showEditBoardModal, setshowEditBoardModal] = useState(false);
   // const [showDeleteBoardModal, setshowDeleteBoardModal] = useState(false);

   const [activeBoardId, setActiveBoardId] = useState(firstBoardId);
   // const [deleteConfirm, setDeleteConfirm] = useState(false);
   const { boardById } = useBoards();


   const togleModal = () => {
      setshowEditBoardModal(prev => !showEditBoardModal);
   };
   // const togleDeleteModal = () => {
   //    setshowDeleteBoardModal(prev => !showDeleteBoardModal);
   // };

   // const deleteConfirmTogle = () => {
   //    setDeleteConfirm(prev => !deleteConfirm);
   // }



   const clickOnBoardsItemHandle = boardId => {
      setActiveBoardId(boardId);
   };

   // const deleteConfirmPopup = document.getElementById('deleteBoardConfirm')
   // console.log(deleteConfirmPopup)

   // const deleteConfirmClose = () => {
   //    deleteConfirmPopup.classList.remove('showDeleteConfirm');
   // }


   const deleteBoardFromList = contactId => {
         // navigate(`/home/}`, { replace: true });
         dispatch(deleteBoards(contactId));
   };

   // const refreshBoardsList = () => {
      // setActiveBoardId(firstBoardId);
   //    dispatch(getAllBoards());
   // };

   useEffect(() => {
      dispatch(getAllBoards());
   }, [dispatch]); 

   // useEffect(() => {
   //    setActiveBoardId(firstBoardId);
   // }, []); 

   console.log('ACTIVE!!!', activeBoardId);      

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
            onClick = {togleModal}
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
            onClick={deleteBoardFromList(_id)}
          >
            <svg
               className={scss.boardsListItemSvg}
               width="16px"
               height="16px"
            >
              <use href={`${SvgSprite}#icon-trash`}></use>
            </svg>
         </div>
      </div>             
         <div className={scss.boardsListActiveFlag}></div>

         {/* {(activeBoardId === _id) && (<div        
          // id='deleteBoardConfirm'
         className={`${scss.deleteBoardConfirm} ${deleteConfirm ? scss.showDeleteConfirm : ''} `}
         >
         <h3 className={scss.confirmDeleteTitle}>Delete this board?</h3>
         <button
            className={scss.confirmDeleteButton}
            onClick={() => {
               deleteBoardFromList(_id);
               deleteConfirmTogle();
               // refreshBoardsList();              
            }}
         >
            YES
         </button>
         <button
            className={scss.confirmDeleteButton}
            onClick={deleteConfirmTogle}
         >
            NO
            </button>
            </div>)} */}
         </div>  
         </button>
      </Link>
   </li>   
))}            
</ul> 
         {showEditBoardModal && (
            <Modal onClose={togleModal}>
          <ModalBoard
            modalTitle={'Edit board'}
            modalBtnTitle={'Edit'}
            onClose={togleModal}
            operation={updateBoard}
            id={boardById._id}
            infoData={{
              title: boardById.title,
              icon: boardById.icon,
              background: boardById.background,
            }}
          />
        </Modal >            
         )}
        </>
   );
};

export default BoardsList;
