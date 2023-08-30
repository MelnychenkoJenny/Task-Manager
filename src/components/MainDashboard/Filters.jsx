import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import clsx from 'clsx';

export const Filters = ({ className, titleBoard, theme }) => {
  return (
    <div className={className}>
      <div className={styles.KkWrapFilters}>
        <h2 className={clsx(styles.KkTitle, styles[theme])}>{titleBoard}</h2>
        <button className={clsx(styles.KkBtnFilters, styles[theme])}>
          <svg className={clsx(styles[theme])} width="16px" height="16px">
            <use href={`${SvgSprite}#icon-filter`}></use>
          </svg>
          <p className={clsx(styles[theme])}>Filters</p>
        </button>
      </div>
    </div>
  );
};
