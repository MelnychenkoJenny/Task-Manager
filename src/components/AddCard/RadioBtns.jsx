import { useEffect, useState } from 'react';
import scss from 'styles/index.module.scss';
import { indigo, pink, lightGreen, grey } from '@mui/material/colors';
import { FormControlLabel, Typography, Radio } from '@mui/material';
import { useAuth } from 'hooks';
import { useBoards } from 'hooks';
import { useDispatch } from 'react-redux';
import { setPriorityFilter } from 'redux/filter/filterSlice';

export const RadioBtns = ({ parentComponent, priority }) => {
  // встановлена раніше та передана сюди пріоритетність для дефолтного стану (у подальшому підлягає редагуванню)
  const dispatch = useDispatch();
  const { filter } = useBoards();
  const { user } = useAuth();
  const [selectedPriorityFilter, setSelectedPriorityFilter] = useState(filter);
  const [selectedPriority, setSelectedPriority] = useState(
    parentComponent === 'FiltersModal'
      ? 'none'
      : priority
      ? priority
      : 'without'
  );

  useEffect(() => {
    dispatch(setPriorityFilter(selectedPriorityFilter));
  }, [dispatch, selectedPriorityFilter]);

  // if (id) {
  //   dispatch(
  //     operation({
  //       selectedPriority,
  //       taskOwner: idColumn,
  //       idTask: id,
  //       boardId: boardName,
  //     })
  //   );
  // } else {
  //   dispatch(
  //     operation({ selectedPriority, taskOwner: idColumn, boardId: boardName })
  //   );
  // }

  const controlProps = item => ({
    // low, medium, high, without
    value: item,
    onChange:
      parentComponent === 'FiltersModal'
        ? e => setSelectedPriorityFilter(e.target.value)
        : e => setSelectedPriority(e.target.value),
    checked:
      parentComponent === 'FiltersModal'
        ? selectedPriorityFilter === item
        : selectedPriority === item,
    name: 'priority',
    inputProps: { 'aria-label': item },
  });

  const priorityStyles =
    parentComponent === 'FiltersModal'
      ? {
          without: grey[400],
          low: indigo[200],
          medium: pink[200],
          high: lightGreen[200],
        }
      : {
          low: indigo[200],
          medium: pink[200],
          high: lightGreen[200],
          without: grey[400],
        };

  function capitalizeFirstLetter(priority) {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  }

  return (
    <div>
      <h3 className={scss.OBFiltersModalLabel}>Label color</h3>
      <div
        className={`${
          parentComponent === 'FiltersModal'
            ? scss.OBFiltersModalRadioGroupV
            : scss.OBFiltersModalRadioGroupH
        }`}
      >
        {Object.keys(priorityStyles).map(
          (
            priority //['low', 'medium', 'high', 'without'])
          ) => (
            <FormControlLabel
              key={priority}
              label={
                parentComponent === 'FiltersModal' ? (
                  <Typography
                    style={{
                      fontSize: '12px',
                      fontFamily: 'Poppins, sans-serif',
                      color:
                        user.theme === 'dark'
                          ? 'rgba(255, 255, 255, 0.50)'
                          : 'rgba(22, 22, 22, 0.50)',
                    }}
                    sx={{
                      '&.Mui-checked': {
                        color: priorityStyles[priority], // Change label text color when checked
                      },
                    }}
                  >
                    {priority === 'without'
                      ? 'Without priority'
                      : capitalizeFirstLetter(priority)}
                  </Typography>
                ) : null
              }
              // labelPlacement={ parentComponent === 'FiltersModal' ? "end" : null }
              className={
                parentComponent === 'FiltersModal'
                  ? scss.OBFiltersModalRadioLabelV
                  : scss.OBFiltersModalRadioLabelH
              }
              control={
                <Radio
                  className={scss.OBFiltersModalRadioBtn}
                  {...controlProps(priority)}
                  sx={{
                    color: priorityStyles[priority],
                    '&.Mui-checked': {
                      color: priorityStyles[priority],
                    },
                    '&.Mui-checked .MuiSvgIcon-root': {
                      fontSize: '17px',
                    },
                    '&:not(.Mui-checked) .MuiSvgIcon-root': {
                      fontSize: '14px',
                      backgroundColor: priorityStyles[priority],
                      borderRadius: '50%',
                    },
                  }}
                />
              }
            />
          )
        )}
      </div>
    </div>
  );
};
