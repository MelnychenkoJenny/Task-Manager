import scss from '../../styles/index.module.scss';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors.js';

const Header = ({ click }) => {
    
    const [themeActive, setThemeActive] = useState(false);

    const handleClick = () => {
    setThemeActive(!themeActive);
    };

    const user = useSelector(selectUser);

    // const [avatarURL, setAvatarURL] = useState('');

    return (
        <div className={scss.headerWrap}>
                <button type="button" onClick={click} className={scss.btnSideBarOpen}>
                    <svg className={scss.svgSideBarOpen} width="24" height="24">
                        <use href={`${sprite}#icon-menu`}></use>
                    </svg>
                </button>
            <div className={scss.headerTextWrap}>

                <div className={scss.dropdownThemeWrap}>
                    <div className={scss.themeHeaderWrap}>
                        <p className={scss.themeText}>Theme</p>
                        <button type="button" className={scss.btnThemeOpen} onClick={handleClick}>
                            <svg className={scss.svgTheme} width="16" height="16">
                                <use href={`${sprite}#icon-chevron-down`}></use>
                            </svg>
                        </button>
                    </div>
                    {themeActive && (
                    <div className={scss.dropdownThemeMenu}>
                        <ul className={scss.dropdownThemeList}>
                            <li className={scss.themeMenuItem}>Light</li>
                            <li className={scss.themeMenuItem}>Dark</li>
                            <li className={scss.themeMenuItem}>Violet</li>
                        </ul>
                    </div>
                    )}
                </div>
                <ul className={scss.headerUserInfoWrap}>
                    <li className={scss.headerUserName}>{user.name}</li>
                    <li className={scss.headerAvatar}></li>
                </ul>
                
            </div>
        </div>     
    )
}

export default Header;
