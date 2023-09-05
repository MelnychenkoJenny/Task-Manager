import scss from '../../styles/index.module.scss';
import { useAuth } from 'hooks';

const DeleteBoard = () => {


const { user } = useAuth();
    

    return (

        <div data-theme={user.theme}>
            <div className={scss.mainModalDelBoardWr}>
                <p className={scss.modalDelBoardTitle}>Delete this Board?</p>
                <div className={scss.modalBtnDeleteBoardWr}>
                <button type="submit" className={scss.btnDeleteBoard}>
                    Yes
                </button>
                <button type="submit" className={scss.btnDeleteBoard}>
                    No
                </button>
            </div>
            </div>  
         </div>
        

    )


}
 

export default DeleteBoard;