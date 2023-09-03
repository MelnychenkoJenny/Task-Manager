import scss from '../../styles/index.module.scss';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTheme } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Modal } from '../Modal/Modal';
import EditProfile from '../EditProfile/EditProfile.jsx';

const Header = ({ click }) => {

  const dispatch = useDispatch();

  const [themeActive, setThemeActive] = useState(false);
  const [showModal, setShowModal] = useState(false);



  const handleClick = () => {
    setThemeActive(!themeActive);
  };


  const handleClickTheme = theme => {
    if (theme === 'light' || theme === 'dark' || theme === 'violet') {
      if (theme === user.theme && !theme) {
        return;
      }
      dispatch(updateTheme(theme));
    }
  };

  
    const togleModal = () => {
    setShowModal(!showModal);
  };

  const { user } = useAuth();

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
            <p className={scss.themeText}>Theme</p>
            <button
              type="button"
              className={scss.btnThemeOpen}
              onClick={handleClick}
            >
              <svg className={scss.svgTheme} width="16" height="16">
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
              <button type='button' onClick={togleModal} className={scss.headerAvatar}>
                <img src={user.avatarURL} alt='user ava' className={scss.headerAvatar}></img>
              </button>
          </li>
        </ul>
      </div>
    </div>
      {showModal && (
        <Modal onClose={togleModal}>
          <EditProfile onClose={togleModal}/>
        </Modal>
    )}  
    </>     
  )

};

export default Header;
