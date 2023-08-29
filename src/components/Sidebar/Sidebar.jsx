import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';

const Sidebar = () => {
  return (
    <div className={scss.sidebarWrap}>
      <div className={scss.sidebar}>
        <div className={scss.sbHeader}>
          <svg width="32px" height="32px" className={scss.sbLogo}>
            <use href={`${SvgSprite}#icon-logo`}></use>
          </svg>
          <h2 className={scss.sbTitle}>Task Pro</h2>
        </div>
        <h3 className={scss.sbSubtitle}>My boards</h3>
        <div className={scss.sbBoards}>
          <div className={scss.sbCreateBoardBlock}>
            <span className={scss.sbCreateBoardText}>
              Create a <br></br> new board
            </span>
            <button className={scss.sbCreateBoardButton}>
              <svg
                width="20px"
                height="20px"
                className={scss.sbCreateBoardLogo}
              >
                <use href={`${SvgSprite}#icon-plus`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div>Тут буде елемент зі списком створених дошок</div>
        <div className={scss.sbHelp}>
          <div className={scss.sbHelpPngCactus}></div>
          <p className={scss.sbHelpText}>
            If you need help with
            <span className={scss.cbTaskProSpan}> TaskPro</span>, check out our
            support resources or reach out to our customer support team.
          </p>
          <button className={scss.sbHelpButton}>
            <svg width="20px" height="20px" className={scss.sbNeedhelpSvg}>
              <use href={`${SvgSprite}#icon-help-circle`}></use>
            </svg>{' '}
            <span className={scss.sbNeedHelpButtonText}>Need help?</span>
          </button>
        </div>
        <button className={scss.sbLogoutButton}>
          <svg width="32px" height="32px" className={scss.sbLogoutSvg}>
            <use href={`${SvgSprite}#icon-logout`}></use>
          </svg>
          <span className={scss.sbLogoutText}>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
