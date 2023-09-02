import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { useAuth } from 'hooks';

import { nanoid } from 'nanoid';
import { indigo, pink, lightGreen, grey } from '@mui/material/colors';
import { Radio, InputAdornment } from '@mui/material';

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



export const AddCard = ({ modalTitle, id, cardTitle, description, priority, deadline, modalBtnTitle }) => {
  // const dispatch = useDispatch();
  const { user } = useAuth();
  // import {
  //   addBoards,
  //   deleteBoards,
  //   getBoardById,
  //   updateBoard,
  // } from 'redux/board/boardOperations';


  const [titleValue, setTitleValue] = useState(cardTitle); // для редагування
  const [descriptionValue, setDescriptionValue] = useState(description); // для редагування
  const [selectedPriority, setSelectedPriority] = useState(priority ? priority : 'without');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(deadline ? dayjs(deadline, 'DD/MM/YYYY') : dayjs()); // dayjs() - currentDate
  //selectedDate = M {$L: 'en', $u: undefined, $d: Tue Aug 29 2023 08:05:53 GMT+0300 (за східноєвропейським літнім часом), $x: {…}, $y: 2023, …}
  // deadline ? dayjs(deadline, 'DD/MM/YYYY').format("dddd, MMMM D") : dayjs()

  // console.log(deadline) //01/09/2023
  // console.log(dayjs(deadline)) // M {... Mon Jan 09 2023 00:00:00 ...} - міняє день і місяць місцями
  // console.log(dayjs(deadline, 'DD/MM/YYYY')); // M {... Fri Sep 01 2023 00:00:00 ...} - тепер все Ок
  // Тепер бібліотека Material UA застосує формат "dddd, MMMM D" і отримаємо те, що треба:
  // console.log(dayjs(deadline, 'DD/MM/YYYY').format("dddd, MMMM D")); // Thursday, August 31
  

  // "Today, September 01" або "Saturday, September 02"
  const dateFormat = dayjs(selectedDate).format("dddd, MMMM D") === dayjs().format("dddd, MMMM D") ? '[Today,] MMMM D' : "dddd, MMMM D";


  const handleFormSubmit = event => { // відправка даних
    event.preventDefault();

    const inputTitle = event.target.elements.title.value.trim();
    const inputDescription = event.target.elements.description.value.trim();
    const inputPriority = event.target.elements.priority.value;
    const inputDeadline = dayjs(selectedDate).format('DD/MM/YYYY'); //   29/11/2023

    const cardData = {
      'id': id ? id : nanoid(), // якщо id є, то його передамо для редагування - пут-запиту  
      'title': inputTitle, 
      'description': inputDescription, 
      'priority': inputPriority,
      'deadline': inputDeadline,
    }

    console.log(cardData);

    // dispatch(addBoards(cardData));  // відправка на бекенд, а потім в стор редакса

    event.target.reset();
  };

  // --------------- пріоритетність ----------------------
  
  const controlProps = (item) => ({ // low, medium, high, without
      value: item,
      onChange: (e) => setSelectedPriority(e.target.value),
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
    <div className={scss.OBAddContainer} data-theme={user.theme}>
      <h4 className={scss.OBAddTitle}>{modalTitle}</h4>
      <form onSubmit={handleFormSubmit} autoComplete="off">
        <label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoFocus
            required
            className={scss.OBAddInput}
            defaultValue={titleValue} // для редагування
            onChange={(e) => setTitleValue(e.target.value)}  // для редагування
          />
        </label>
        <label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className={`${scss.OBAddInput} ${scss.OBAddDescription}`}
            defaultValue={descriptionValue} // для редагування
            onChange={(e) => setDescriptionValue(e.target.value)}  // для редагування
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
          {/* dateAdapter={AdapterDayjs} - вказуємо, що під капотом використовуємо бібліотеку Day.js (її методи) */}
            <DatePicker
              open={isCalendarOpen}
              onClose={() => setIsCalendarOpen(false)} // закриття календаря
              onChange={(date) => setSelectedDate(date)}   //Material UA в date записує обрану з календаря дату 
              // M {$L: 'en', $u: undefined, $d: Fri Sep 01 2023 09:13:29 GMT+0300 (за східноєвропейським літнім часом), $x: {…}, $y: 2023, …}
              value={selectedDate}
              format= {dateFormat} // приймає рядок
              disablePast={true}   // минулі дати не обируться
              outsideCurrentMonth={true} // початок наступного місяця невидимий
              dayOfWeekFormatter={(day) => day.slice(0, 2).toUpperCase()} // видимі перші 2 літери назви дня тижня
              sx={{
                // backgroundColor: 'red',
                display: 'inline', // прибирає нижній паддінг інпута 
              }}
              slots={{
                openPickerButton: () => null, // приховуємо дефолтну кнопку-іконку календаря
              }}
              slotProps={{
                // popper: { '&.MuiPickersPopper-root': {border: '4px solid yellow'}, },
                calendarHeader: {
                  sx: {
                    '.MuiPickersCalendarHeader-root': {
                       position: 'relative',
                    },
                    '.MuiPickersCalendarHeader-labelContainer': { // це тільки місяць і рік
                        // backgroundColor: 'green',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        letterSpacing: '-0.32px',
                        display: "grid", // тепер місяць і рік центровані
                    },
                    '.MuiPickersCalendarHeader-label': {
                      // backgroundColor: 'brown',
                      display: 'inline-block',
                      marginLeft: '50%',
                      transform: 'translateX(-50%)',
                    },
                    '.MuiPickersCalendarHeader-switchViewButton': {
                        display: 'none', // прибираємо стрілку вниз поряд з місяцем і роком
                    },
                    // '.MuiPickersArrowSwitcher-root': { // 2 кнопки в календарі: < >
                        // position: 'absolute',
                        // top: '10px',
                    //     display: 'flex',
                    //     justifyContent: "space-between", // по краям
                    // },
                    '.MuiIconButton-edgeEnd': { // кнопка <
                      position: 'absolute',
                      top: '10px',
                      left: '3px',
                    },
                    '.MuiIconButton-edgeStart': { // кнопка >
                      position: 'absolute',
                      top: '10px',
                      right: '3px',
                    },
                  },
                  style: {
                    marginTop: '18px',
                    marginBottom: '14px',
                    display: 'inline',
                    paddingLeft: '18px',
                    paddingRight: '18px',
                    // backgroundColor: 'red', //працює
                  },
                },

                previousIconButton: { 
                  sx: { stroke: user.theme === 'violet' ? '#5255BC' : '#BEDBB0', },
                },
                nextIconButton: { 
                  sx: { stroke: user.theme === 'violet' ? '#5255BC' : '#BEDBB0', },
                },

                textField: {
                  fullWidth: false,
                  onClick: () => setIsCalendarOpen(true), // інпут стає клікабельним; по кліку відкривається календар (picker)
                  variant: 'standard',
                  size: 'small',
                  InputProps: {
                    disableUnderline: true,  // прибирає дефолтний нижній бордер, встановлений variant: 'standard'
                    'aria-label': 'deadline',
                    style: {
                      fontSize: '14px', 
                      fontFamily: 'Poppins, sans-serif',
                      color: user.theme === 'violet' ? '#5255BC' : '#BEDBB0', // колір тексту
                      fontWeight: 500,
                      letterSpacing: '-0.28px',                
                    },
                    endAdornment: (   // розташування іконки - в кінці інпуту (є і startAdornment)
                     <InputAdornment position="start" sx={{ cursor: 'pointer'}}>
                        <svg className={scss.OBAddDateIcon} width='18px'>
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
            >
            </DatePicker>            
          </LocalizationProvider>
        </div>

        <button className={scss.OBAddSubmitBtn}>
          <div className={scss.OBAddIconWrapper}>
            <svg className={scss.OBAddSubmitIcon}>
              <use href={SvgSprite + '#icon-plus'} />
            </svg>
          </div>
          {modalBtnTitle}
        </button>
      </form>
    </div>
  );
};

// export default AddCard;