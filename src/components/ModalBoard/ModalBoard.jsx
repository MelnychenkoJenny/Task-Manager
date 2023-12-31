import styles from 'styles/index.module.scss';
import sprite from 'images/sprite.svg';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useState } from 'react';
import { imagesBg, iconModalBgDefaultLight, iconModalBgDefaultDark, iconModalBgDefaultViolet } from 'images/image-url';

const ModalBoard = ({
  modalTitle,
  modalBtnTitle,
  onClose,
  operation,
  id,
  infoData,
}) => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  //!! Цей стейт, який зберігає дані отримані з форми. Потрібен для Update модалки, щоб був контрольований інпут.
  const [valueInputUpdate, setvalueInputUpdate] = useState(
    infoData
      ? {
          title: infoData.title,
          icon: infoData.icon,
          background: infoData.background,
        }
      : {
          title: '',
          icon: 'icon-project',
          background: 'background0',
        }
  );
 

  // !!Контролюємо інпут
  const handleChange = event => {
    const { name, value } = event.target;
    setvalueInputUpdate(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // !!Сабміт форми, відправка різних діспатчей, в залежності від пропа operation
  const handleSubmit = e => {
    e.preventDefault();
    const dataSubmit = !id ? valueInputUpdate : { ...valueInputUpdate, id };
    dispatch(operation(dataSubmit));
    onClose();
  };

  const defaultBgImage =
  user.theme === 'dark'
    ? iconModalBgDefaultDark
    : user.theme === 'violet'
    ? iconModalBgDefaultViolet
    : iconModalBgDefaultLight;

  return (
    <form
      className={styles.INModalBoardContainer}
      data-theme={user.theme}
      onSubmit={handleSubmit}
    >
      <h3 className={styles.INBoardTitle}>{modalTitle}</h3>

      <input
        className={styles.INBoardInput}
        type="text"
        placeholder="Title"
        name="title"
        value={valueInputUpdate.title || ''}
        onChange={handleChange}
        required
      />

      <div className={styles.INIconsWraper}>
        <h4 className={styles.INBoardSubtitle}>Icons</h4>
        <ul className={styles.INIconsGroup}>
          <li className={styles.INListItem}>
            <label className={styles.INListItem}>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-project"
                onChange={handleChange}
                checked={valueInputUpdate.icon === 'icon-project'}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-project'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label className={styles.INListItem}>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-star"
                onChange={handleChange}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-star'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label className={styles.INListItem}>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-loading"
                onChange={handleChange}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-loading'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label className={styles.INListItem}>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-puzzle"
                onChange={handleChange}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-puzzle'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label className={styles.INListItem}>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-container"
                onChange={handleChange}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-container'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label className={styles.INListItem}>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-lightning"
                onChange={handleChange}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-lightning'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label className={styles.INListItem}>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-colors"
                onChange={handleChange}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-colors'} />
              </svg>
            </label>
          </li>

          <li className={styles.INListItem}>
            <label className={styles.INListItem}>
              <input
                className={styles.INRadioBtn}
                type="radio"
                name="icon"
                value="icon-hexagon"
                onChange={handleChange}
              />
              <svg className={styles.INBoardIcon}>
                <use href={sprite + '#icon-hexagon'} />
              </svg>
            </label>
          </li>
        </ul>
      </div>

      <div className={styles.INIconsWraper}>
        <h4 className={styles.INBoardSubtitle}>Background</h4>
        <ul className={styles.INBgGroup}>
          {/* потрібно додати логіку вибору дефолтної картинки в залежності від кольору */}
          <li>
            <label className={styles.INListItem}>
              <input
                className={styles.INBGBtn}
                type="radio"
                name="background"
                value="background0"
                onChange={handleChange}
                checked={valueInputUpdate.background === 'background0'}
              />
              <img
                className={styles.INBgImage}
                src={defaultBgImage}
                alt="background0"
              />
            </label>
          </li>

          {imagesBg.map(({ name, min }) => {
            return (
              <li key={name}>
                <label className={styles.INListItem}>
                  <input
                    className={styles.INBGBtn}
                    type="radio"
                    name="background"
                    value={name}
                    onChange={handleChange}
                  />
                  <img className={styles.INBgImage} src={min} alt={name} />
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <button className={styles.IMSubmitBtn} type="submit">
        <div className={styles.IMBtnIconWrapper}>
          <svg className={styles.INAddIcon}>
            <use href={sprite + '#icon-plus'} />
          </svg>
        </div>
        {modalBtnTitle && modalBtnTitle}
      </button>
    </form>
  );
};

export default ModalBoard;
