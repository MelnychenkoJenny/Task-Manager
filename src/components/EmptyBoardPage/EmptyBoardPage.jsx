import { Modal } from 'components/Modal/Modal';
import ModalBoard from 'components/ModalBoard/ModalBoard';
import { useState } from 'react';
import { addBoards } from 'redux/board/boardOperations';
import scss from 'styles/index.module.scss';

export const EmptyBoardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iconStyle, seticonStyle] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={scss.AOemptyPage}>
      <p className={scss.AOemptyPageText}>
        Before starting your project, it is essential{' '}
        <span className={scss.AOcreateBoard} onClick={handleOpenModal}>
          to create a board
        </span>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
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
    </div>
  );
};
