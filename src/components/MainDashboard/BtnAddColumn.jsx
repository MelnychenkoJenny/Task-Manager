// import scss from 'styles/index.module.scss';
import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';

export const BtnAddColumn = ({ title, className }) => {
  return (
    <div className={className}>
      <button className={styles.KkBtn}>
        <div className={styles.KkIconPlus}>
          <svg width="14px" height="14px">
            <use href={`${SvgSprite}#icon-plus`}></use>
          </svg>
        </div>
        <p>{title}</p>
      </button>
    </div>
  );
};
