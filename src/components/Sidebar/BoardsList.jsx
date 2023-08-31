import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoards } from '../../redux/board/boardSelectors';
import { getAllBoards, deleteBoards } from '../../redux/board/boardOperations';



const BoardsList = () => {

   const boards = useSelector(selectBoards);
   console.log(boards);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllBoards())
   }, [dispatch]);

   const deleteBoardFromList = contactId => {
      dispatch(deleteBoards(contactId))
   };


   return (
       <ul className={scss.boardsList}>
         <li className={scss.boardsListItem}
         >
            <a href="" className={scss.boardsListItemWrap}>
            <div className={scss.boardsListItemTitleGroup}>
            <svg className={scss.boardsListItemTitleSvg} width="18px" height="18px">
              <use href={`${SvgSprite}#icon-pencil`}></use>
            </svg>
            <p className={scss.boardsListItemTitle}>
               Board name
               {/* {title} */}
            </p>
            </div>
            <div className={scss.boardsListItemActive}>
               <div className={scss.boardsListItemButtons}>
                   <button
            className={scss.boardsListItemButton}
            onClick={() => {
              console.log('pensil click');
            }}
          >
            <svg className={scss.boardsListItemSvg} width="16px" height="16px">
              <use href={`${SvgSprite}#icon-pencil`}></use>
            </svg>
          </button>

          <button
            className={scss.boardsListItemButton}
            onClick={() => {
              deleteBoardFromList();
            }}
          >
            <svg className={scss.boardsListItemSvg} width="16px" height="16px">
              <use href={`${SvgSprite}#icon-trash`}></use>
            </svg>
               </button>
               </div>
             
               <div className={scss.boardsListActiveFlag}></div>
          </div>  
            </a>
            {/* <img className={scss.imageGalleryItemImg} onClick={togleModal} src={webformatURL} alt={tags} /> */}
         </li>
         {/* {showModal && (<Modal onClose={togleModal}>
            <img src={largeImageURL} alt={tags} />
         </Modal >)} */}
      </ul>       
   )
};

export default BoardsList;

