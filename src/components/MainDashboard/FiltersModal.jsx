import scss from 'styles/index.module.scss';
import { RadioBtns } from '../AddCard/RadioBtns';
import { useAuth } from 'hooks';

export const FiltersModal = () => {
  const { user } = useAuth();

  const handleShowAll = () => {
    console.log('Filtered tasks will be shown')
  }

  return (
    <div className={scss.OBFiltersModalContainer} data-theme={user.theme}>
        <h4 className={scss.OBFiltersModalTitle}>Filters</h4>
        <hr />  
        {/* rgba(22, 22, 22, 0.10);          темна rgba(255, 255, 255, 0.10) */}
        <div className={scss.OBFiltersModalContent}>
            <RadioBtns parentComponent={'FiltersModal'} />
            <p className={scss.OBFiltersModalShow} onClick={handleShowAll}>Show all</p>
        </div>
    </div>
  );
};
