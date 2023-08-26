import { useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import scss from './modal.module.scss';


const Modal = ({ children, onClose, custom }) => {
  const handleClose = e => {
    e.stopPropagation();
    onClose();
  };

  const onCloseBackdrop = e => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      onClose();
    }
  };

  function onCloseEscape(e) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onCloseEscape);
    return () => {
      window.removeEventListener('keydown', onCloseEscape);
    };
  });

  return (
    <div className={scss.backdrop}  onClick={onCloseBackdrop}>
      <div className ={scss.modalwindow} custom={custom ? true : false}>
        <div className ={scss.closeBtn} onClick={handleClose}>
          <div className={scss.icon} width={18} height={18}>
            <use href={`${sprite}#icon-close`}></use>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;