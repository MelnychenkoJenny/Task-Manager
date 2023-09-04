import scss from 'styles/index.module.scss';
import { useAuth } from 'hooks';

export const EmptyBoardPage = () => {
  const { user } = useAuth();
  return (
    <div className={scss.AOemptyPage} data-theme={user.theme}>
        <p className={scss.AOemptyPageText}>
           Before starting your project, it is essential <span className={scss.AOcreateBoard}>to create a board</span> to
           visualize and track all the necessary tasks and milestones. This board
           serves as a powerful tool to organize the workflow and ensure effective
           collaboration among team members.
      </p>
    </div>
    
  );
};
