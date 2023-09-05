// 💙💛 Kostiantyn Koshyk
import { useState } from 'react';
import { FiltersModal } from './FiltersModal';
import { Modal } from '../Modal/Modal'
import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { useBoards } from 'hooks';


export const Filters = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { boardById } = useBoards();

  // const onFilters = () => {
  //   console.log('Filters ckick');
  // };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={className}>
      <div className={styles.KkWrapFilters}>
        <h2 className={styles.KkTitle}>{boardById.title}</h2>

        <button className={styles.KkBtnFilters} onClick={handleOpenModal}>
          <svg width="16px" height="16px">
            <use href={`${SvgSprite}#icon-filter`}></use>
          </svg>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <FiltersModal onClose={handleCloseModal} />
            </Modal>
          )}
          <p>Filters</p>
        </button>
      </div>
    </div>
  );
};
