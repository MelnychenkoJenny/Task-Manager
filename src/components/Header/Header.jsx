import scss from './Header.module.scss';
import sprite from '../../images/sprite.svg';



const Header = () => {

    return (
       <div className={scss.headerWrap}>
            <div className={scss.headerTextWrap}>
                <span className={scss.themeWrap}>
                    Theme 
                    {/* Вставити компонент з темою */}
                    <span>
                        <svg className={scss.svgTheme} width="20" height="20">
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
