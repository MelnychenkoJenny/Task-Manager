import { useState } from 'react';
import scss from 'styles/index.module.scss';
import { indigo, pink, lightGreen, grey } from '@mui/material/colors';
import { FormControlLabel, Radio } from '@mui/material';


export const RadioBtns = ({ parentComponent }) => {
  const [selectedPriority, setSelectedPriority] = useState('low');    // priority ? priority : 'without'

  console.log(selectedPriority);

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

  const controlProps = item => ({  // low, medium, high, without
    value: item,
    onChange: e => setSelectedPriority(e.target.value),
    checked: selectedPriority === item,
    name: 'priority',
    inputProps: { 'aria-label': item },
  });

  const priorityStyles = {
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
      <p className={scss.OBFiltersModalLabel}>Label color</p>
      <div className={ `${parentComponent === 'FiltersModal' ? scss.OBFiltersModalRadioGroupV : scss.OBFiltersModalRadioGroupH }`}>
        {Object.keys(priorityStyles).map((priority) => (       //['low', 'medium', 'high', 'without'])
          <FormControlLabel
            key={priority}
            label={priority === 'without' ? 'Without priority' : capitalizeFirstLetter(priority)}
            labelPlacement="end"
            className={scss.OBFiltersModalRadioLabel}

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
        ))}
      </div>
  </div>
  );
};