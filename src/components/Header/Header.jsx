import scss from '../../styles/index.module.scss';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTheme } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Modal } from '../Modal/Modal';
import EditProfile from '../EditProfile/EditProfile.jsx';
import userDark from '../../images/user-default-dark.png';
import userLight from '../../images/user-default-light.png';
import userViolet from '../../images/user-default-violet.png';

const Header = ({ click }) => {
  const dispatch = useDispatch();
  const [themeActive, setThemeActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setThemeActive(!themeActive);
  };

  const handlecCloseTheme = () => {
    setThemeActive(false)
  }

  const handleClickTheme = theme => {
    if (theme === 'light' || theme === 'dark' || theme === 'violet') {
      if (theme === user.theme && !theme) {
        return;
      }
      dispatch(updateTheme(theme))
      handlecCloseTheme();
    }
  };

  const togleModal = () => {
    setShowModal(!showModal);
  };

  const { user } = useAuth();

  const setDefaultAvatar = () => {
    if (user.theme === 'dark') {
      return userDark;
    } else if (user.theme === 'light') {
      return userLight;
    } else if (user.theme === 'violet') {
      return userViolet;
    }
  };

  return (
    <>
    <div className={scss.headerWrap}>
      <button type="button" onClick={click} className={scss.btnSideBarOpen}>
        <svg className={scss.svgSideBarOpen} width="24" height="24">
          <use href={`${sprite}#icon-menu`}></use>
        </svg>
      </button>
      <div className={scss.headerTextWrap}>
        <div className={scss.dropdownThemeWrap}>
          <div className={scss.themeHeaderWrap}>
            
            <button
              type="button"
              className={scss.btnThemeOpen}
              onClick={handleClick}
            >
              <p className={scss.themeText}>Theme</p>
              <svg className={scss.svgThemeOpen} width="16" height="16">
                <use href={`${sprite}#icon-chevron-down`}></use>
              </svg>
            </button>
          </div>
          {themeActive && (
            <div className={scss.dropdownThemeMenu}>
              <ul className={scss.dropdownThemeList}>
                <li
                  className={scss.themeMenuItem}
                  onClick={() => {
                    handleClickTheme('light');
                  }}
                >
                  Light
                </li>
                <li
                  className={scss.themeMenuItem}
                  onClick={() => {
                    handleClickTheme('dark');
                  }}
                >
                  Dark
                </li>
                <li
                  className={scss.themeMenuItem}
                  onClick={() => {
                  handleClickTheme('violet');
                }}
                >
                  Violet
                </li>
              </ul>
              </div>
            )}
            
              </div>
          <ul className={scss.headerUserInfoWrap}>
            <li className={scss.headerUserName}>{user.name}</li>
            <li>
              <button type='button' onClick={togleModal} className={scss.headerBtnAvatar}>
                {user.avatarURL !== '/' ? <img src={user.avatarURL} alt='avatarUser' className={scss.headerAvatar}></img> : <img src={setDefaultAvatar()} alt='defaultAvatar' className={scss.headerAvatar}></img>  }
              </button>
            </li>
          </ul>
          </div>
          </div>


      {showModal && (
        <Modal isOpen={showModal} onClose={togleModal}>
          <EditProfile onClose={togleModal} />
        </Modal>
    )}  
    </>     
  ) 
};

export default Header;
