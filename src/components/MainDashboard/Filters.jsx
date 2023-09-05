// 💙💛 Kostiantyn Koshyk
import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { useBoards } from 'hooks';

export const Filters = ({ className }) => {
  const { boardById } = useBoards();

  const onFilters = () => {
    console.log(
      'Filters ckick меня кликнули в компоненте Filters.jsx 10 строка'
    );
  };

  return (
    <div className={className}>
      <div className={styles.KkWrapFilters}>
        <h2
          className={styles.KkTitle}
          style={{ padding: !boardById.background && '4px' }}
        >
          {boardById.title}
        </h2>
        {/* <h2 className={styles.KkTitle}>{boardById.title}</h2> */}

        <button className={styles.KkBtnFilters} onClick={onFilters}>
          <svg width="16px" height="16px">
            <use href={`${SvgSprite}#icon-filter`}></use>
          </svg>

          <p>Filters</p>
        </button>
      </div>
    </div>
  );
};
