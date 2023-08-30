import { useState } from 'react';
import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';

import { nanoid } from 'nanoid';
import { indigo, pink, lightGreen, grey } from '@mui/material/colors';
import { Radio, /*ThemeProvider, createTheme,*/ InputAdornment } from '@mui/material';

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




const AddCard = () => {

  // const dispatch = useDispatch();
  const [selectedPriority, setSelectedPriority] = useState('without');
  const [selectedDate, setSelectedDate] = useState(dayjs()); // dayjs() - currentDate
  //selectedDate = M {$L: 'en', $u: undefined, $d: Tue Aug 29 2023 08:05:53 GMT+0300 (за східноєвропейським літнім часом), $x: {…}, $y: 2023, …}
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);


  const handleFormSubmit = event => {
    event.preventDefault();

    const inputTitle = event.target.elements.title.value.trim();
    const inputDescription = event.target.elements.description.value.trim();
    const inputPriority = event.target.elements.priority.value;
    const inputDeadline = dayjs(selectedDate).format('DD/MM/YYYY'); //   29/11/2023

    const cardData = {
      'id': nanoid(),
      'title': inputTitle, 
      'description': inputDescription, 
      'priority': inputPriority,
      'deadline': inputDeadline,
    }

    console.log(cardData);

    // dispatch(addBoards(cardData));  // відправка на бекенд, а потім в стор редакса

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
              open={isCalendarOpen}
              onClose={() => setIsCalendarOpen(false)} // закриття календаря
              className={scss.OBAddDeadline}
              onChange={(date) => setSelectedDate(date)}   //Material UA в date записує обрану з календаря дату 
              value={selectedDate}
              format="dddd, MMMM D"
              disablePast={true}   // минулі дати не обируться
              outsideCurrentMonth={true} // початок наступного місяця невидимий
              dayOfWeekFormatter={(day) => day.slice(0, 2).toUpperCase()} // видимі перші 2 літери назви дня тижня
              slots={{
                openPickerButton: () => null, // приховуємо дефолтну кнопку-іконку календаря
               }}
              slotProps={{
                textField: {
                  onClick: () => setIsCalendarOpen(true), // інпут стає клікабельним; по кліку відкривається календар (picker)
                  variant: 'standard',
                  size: 'small',
                  InputProps: {
                    disableUnderline: true,  // прибирає дефолтний нижній бордер, встановлений variant: 'standard'
                    'aria-label': 'deadline',
                    endAdornment: (   // прикраса в кінці інпуту - іконка (є і endAdornment)
                     <InputAdornment
                        sx={{
                          color: "rgba(82, 85, 188, 1)",
                          cursor: 'pointer', 
                        }}
                        position="start"
                     >
                        <svg className={scss.OBCardIcon} width='18px'>
                            <use 
                              href={SvgSprite + '#icon-chevron-down'} // стрілка вниз в календарі  
                              aria-label="open calendar" 
                              edge="start" 
                            />       
                        </svg>
                     </InputAdornment>
                    ),
                   },
                },              
              }}
            />             
          </LocalizationProvider>
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