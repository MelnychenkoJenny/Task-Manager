import scss from '../../styles/index.module.scss';
import sprite from '../../images/sprite.svg';


const Header = ({click}) => {

    return (
        <div className={scss.headerWrap}>
                <button type="button" onClick={click} className={scss.btnSideBarOpen}>
                    <svg className={scss.svgSideBarOpen} width="24" height="24">
                        <use href={`${sprite}#icon-menu`}></use>
                    </svg>
                </button>
            <div className={scss.headerTextWrap}>
                <span className={scss.themeWrap}>
                    <p className={scss.themeText}>Theme</p>
                    {/* Вставити компонент з темою */}
                    <span>
                        <svg className={scss.svgTheme} width="16" height="16">
                            <use href={`${sprite}#icon-chevron-down`}></use>
                        </svg>
                    </span>
                </span>
                <ul className={scss.headerUserInfoWrap}>
                    <li className={scss.headerUserName}>UserName</li>
                    <li className={scss.headerAvatar}></li>
                </ul>
                
            </div>
        </div>     
    )
}

export default Header;
