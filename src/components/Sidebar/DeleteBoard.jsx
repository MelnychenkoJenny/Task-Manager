import scss from '../../styles/index.module.scss';
import { useAuth } from 'hooks';

const DeleteBoard = ({ handleDeleteBoard, onClose, activeBoardId}) => {


const { user } = useAuth();
    

    return (

        <div data-theme={user.theme}>
            <div className={scss.mainModalDelBoardWr}>
                <p className={scss.modalDelBoardTitle}>Delete this Board?</p>
                <div className={scss.modalBtnDeleteBoardWr}>
                <button
                   type="button"
                   className={scss.btnDeleteBoard}
                   onClick={() => {
                  handleDeleteBoard(activeBoardId);
                  onClose();
                   }}
                >
                    Yes
                </button>
                <button
                   type="button"
                   className={scss.btnDeleteBoard}
                  onClick={onClose}
                >
                    No
                </button>
            </div>
            </div>  
         </div>
        

    )


}
 

export default DeleteBoard;