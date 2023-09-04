import scss from 'styles/index.module.scss';

export const EmptyBoardPage = () => {
  return (
    <div className={scss.AOemptyPage}>
        <p className={scss.AOemptyPageText}>
           Before starting your project, it is essential <span className={scss.AOcreateBoard}>to create a board</span> to
           visualize and track all the necessary tasks and milestones. This board
           serves as a powerful tool to organize the workflow and ensure effective
           collaboration among team members.
      </p>
    </div>
    
  );
};
