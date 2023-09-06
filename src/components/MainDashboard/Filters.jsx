// 💙💛 Kostiantyn Koshyk
import { useState, useEffect } from 'react';
import styles from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { useBoards } from 'hooks';
import { RadioBtns } from '../AddCard/RadioBtns';
import { useAuth } from 'hooks';

export const Filters = ({ className }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const { boardById } = useBoards();
  const { user } = useAuth();

  const handleShowAll = () => {
    console.log('Filtered tasks are shown');
  };

  const onOpenFilter = () => {
    setIsFilterVisible(true);
  };
  const onCloseFilter = () => {
    setIsFilterVisible(false);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsFilterVisible(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFilterVisible]);

  return (
    <div
      className={`${className} ${styles.OBFilterModalContainer}`}
      data-theme={user.theme}
    >
      <div className={styles.KkWrapFilters}>
        <h2
          className={styles.KkTitle}
          style={{ padding: boardById.background && '4px' }}
        >
          {boardById.title}
        </h2>
        {/* <h2 className={styles.KkTitle}>{boardById.title}</h2> */}

        <button
          type="button"
          className={styles.KkBtnFilters}
          style={{ padding: boardById.background && '4px' }}
          onClick={onOpenFilter}
        >
          <svg width="16px" height="16px">
            <use href={`${SvgSprite}#icon-filter`}></use>
          </svg>
          <p>Filters</p>
        </button>

        {isFilterVisible && (
          <div
            className={styles.OBFiltersModalContainer}
            style={{ opacity: isFilterVisible ? 1 : 0 }}
            data-theme={user.theme}
          >
            <button
              type="button"
              className={styles.OBFilterBtnIcon}
              aria-label="close"
              onClick={onCloseFilter}
            >
              <svg width="18" height="18">
                <use className="icon" href={SvgSprite + '#icon-close'} />
              </svg>
            </button>
            <h4 className={styles.OBFiltersModalTitle}>Filters</h4>
            <hr className={styles.OBFiltersModalSeparator} />
            <div className={styles.OBFiltersModalContent}>
              <RadioBtns parentComponent={'FiltersModal'} />
              <p className={styles.OBFiltersModalShow} onClick={handleShowAll}>
                Show all
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
