// import scss from 'styles/index.module.scss';
import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import clsx from 'clsx';

export const BtnAddColumn = ({ title, className, theme }) => {
  return (
    <div className={className}>
      <button className={clsx(styles.KkBtnColumn, styles[theme])}>
        <div className={clsx(styles.KkIconPlusColumn, styles[theme])}>
          <svg className={clsx(styles[theme])} width="14px" height="14px">
            <use href={`${SvgSprite}#icon-plus`}></use>
          </svg>
        </div>
        <p className={clsx(styles[theme])}>{title}</p>
      </button>
    </div>
  );
  // return (
  //   <div className={className}>
  //     <button
  //       className={
  //         (color === 'dark' && styles.KkBtnDark) ||
  //         (color === 'green' && styles.KkBtnGreen)
  //       }
  //     >
  //       <div className={styles.KkIconPlus}>
  //         <svg width="14px" height="14px">
  //           <use href={`${SvgSprite}#icon-plus`}></use>
  //         </svg>
  //       </div>
  //       <p>{title}</p>
  //     </button>
  //   </div>
  // );
};