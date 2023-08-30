import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import clsx from 'clsx';
// import { cleanDigitSectionValue } from '@mui/x-date-pickers/internals/hooks/useField/useField.utils';

export const TitleCards = ({ className, title, theme }) => {
  return (
    <div className={className}>
      <div className={clsx(styles.KkWrapTitleCards, styles[theme])}>
        <p className={clsx(styles[theme])}> {title}</p>
        <div className={styles.KkSvgTitleCards}>
          <button
            className={styles.KkBtnIcons}
            onClick={() => {
              console.log('icon pensil click');
            }}
          >
            <svg className={clsx(styles[theme])} width="16px" height="16px">
              <use href={`${SvgSprite}#icon-pencil`}></use>
            </svg>
          </button>

          <button
            className={styles.KkBtnIcons}
            onClick={() => {
              console.log('icon trash click');
            }}
          >
            <svg className={clsx(styles[theme])} width="16px" height="16px">
              <use href={`${SvgSprite}#icon-trash`}></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
