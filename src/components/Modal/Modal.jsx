import scss from 'styles/index.module.scss';
import sprite from 'images/sprite.svg';
import  { React, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAuth } from 'hooks';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ isOpen, onClose, children }) => {
   const { user } = useAuth();

   useEffect(() => {

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
         onClose();
         document.body.style.overflow = 'visible'; //body почне скролитися після закриття модалки
      };
      };
      
      window.addEventListener('keydown', handleKeyDown);
      
      return () => window.removeEventListener('keydown', handleKeyDown);

   }, [onClose]);
 
   const handleBackdropClick = e => {
      if (e.currentTarget === e.target) {
         onClose();
         document.body.style.overflow = 'visible'; //body почне скролитися після закриття модалки
      };
   };

   document.body.style.overflow = 'hidden';  //щоб body не скролився при відкритій модалці

   return (
      createPortal(<div className={scss.overlay} onClick={handleBackdropClick}>
            <div className={scss.modal} style={{opacity: isOpen ? 1 : 0}}>
               <div className={scss.closebtn} onClick={onClose} data-theme={user.theme} >
                  <svg className={scss.icon} width="18" height="18">
                     <use className='icon' href={sprite + '#icon-close'} ></use>
                  </svg>
               </div>
                  {children}
            </div>
      </div>, modalRoot)
         
   )
};