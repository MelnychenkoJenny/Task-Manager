import { useState } from 'react';
import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';

import { indigo, pink, lightGreen, grey } from '@mui/material/colors';
import { Radio } from '@mui/material';
 
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const AddCard = () => {

  const [selectedDate, setSelectedDate] = useState(dayjs()); // dayjs() - currentDate
  //selectedDate = M {$L: 'en', $u: undefined, $d: Tue Aug 29 2023 08:05:53 GMT+0300 (за східноєвропейським літнім часом), $x: {…}, $y: 2023, …}
  const [selectedPriority, setSelectedPriority] = useState('without');

  // const formatDate = (date) => {
  //   const currentDate = dayjs(); 
  //   if (date.isSame(currentDate, 'day')) {
  //     return 'Today'; // Display "Today" for the current date
  //   }

  const handleFormSubmit = event => {
    event.preventDefault();

    const inputTitle = event.target.elements.title.value.trim();
    const inputDescription = event.target.elements.description.value.trim();
    const inputPriority = event.target.elements.priority.value;
    const inputDate = dayjs(selectedDate).format('DD/MM/YYYY'); //   29/11/2023

    console.log(`inputTitle: ${inputTitle}, inputDescription: ${inputDescription}, inputPriority: ${inputPriority}, inputDate: ${inputDate}`)
    // checkNameClone(inputTitle, inputDescription, inputPriority); // відправка на бек
    event.target.reset();
  };

  // --------------- ф-ції для пріоритетності ----------------------
  const handleChange = (event) => {
      setSelectedPriority(event.target.value);
  };
  
  const controlProps = (item) => ({ // low, medium, high, without
      value: item,
      onChange: handleChange,
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

  return (
    <div className={scss.OBAddContainer}>
      <h4 className={scss.OBAddTitle}>Add card</h4>
      <form onSubmit={handleFormSubmit} autoComplete="off">
        <label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoFocus
            required
            className={scss.OBAddInput}
          />
        </label>
        <label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className={`${scss.OBAddInput} ${scss.OBAddDescription}`}
          />
        </label>

        <div className={scss.OBAddlabel}> 
            Label color 
          <div className={scss.OBAddRadioGroup}>  
            {Object.keys(priorityStyles).map((priority) => ( //['low', 'medium', 'high', 'without']
              <Radio className={scss.OBAddradioBtn}
                key={priority}
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
            ))}
          </div>
        </div>

        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className={scss.OBAddDeadline}
              onChange={(date) => setSelectedDate(date)}   //Material UA в date записує обрану з календаря дату 
              value={selectedDate}
              format="dddd, MMMM D"
              disablePast={true}   // минулі дати не обируться
              outsideCurrentMonth={true} // початок наступного місяця невидимий
              dayOfWeekFormatter={(day) => day.slice(0, 2).toUpperCase()} // видимі перші 2 літери назви дня тижня
              // showDaysOutsideCurrentMonth='true'
              // slotProps={}
              // slots={}
              // sx={{
              // }}
              // actionBar
              // calendarHeader="year"
              // today={true}
              // leftArrowIcon={<KeyboardArrowLeftIcon />} //<CustomLeftArrowIcon />
              // nextIconButton={<KeyboardArrowRightIcon />}
              // nextIconButton={<CustomNextArrowIcon />}
              // previousIconButton
              // rightArrowIcon
              // switchViewButton
              // switchViewIcon

          
              // format={
              //   selectedDate.isSame(dayjs(), 'day')
              //     ? 'Today'
              //     : 'dddd, MMMM D'
              // }
            />
          </LocalizationProvider>
          {/* <svg className={scss.OBCardIcon}>
          <use href={SvgSprite + '#icon-chevron-down'} /> // стрілка вниз в календарі
        </svg> */}
        </div>

        <button className={scss.OBAddSubmitBtn}>
          <div className={scss.OBAddIconWrapper}>
            <svg className={scss.OBAddIcon}>
              <use href={SvgSprite + '#icon-plus'} />
            </svg>
          </div>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCard;