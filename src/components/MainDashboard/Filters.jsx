import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';

export const Filters = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.KkWrapFilters}>
        <h2 className={styles.KkTitle}>Project office</h2>
        <button className={styles.KkBtnFilters}>
          <svg width="16px" height="16px">
            <use href={`${SvgSprite}#icon-filter`}></use>
          </svg>
          <p>Filters</p>
        </button>
      </div>
    </div>
  );
};
