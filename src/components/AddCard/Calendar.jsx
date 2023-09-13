import { useState, useEffect } from 'react';
import scss from '../../styles/index.module.scss';
import SvgSprite from '../../images/sprite.svg';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputAdornment } from '@mui/material';
import { useAuth } from 'hooks';




export const Calendar = ({ deadline, onFormatDeadline }) => { // deadline з AddCard
  const { user } = useAuth();
  const [inputWidth, setInputWidth] = useState('auto');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
  deadline ? dayjs(deadline, 'DD/MM/YYYY') : dayjs()
  ); // dayjs() - currentDate

    //selectedDate = M {$L: 'en', $u: undefined, $d: Tue Aug 29 2023 08:05:53 GMT+0300 (за східноєвропейським літнім часом), $x: {…}, $y: 2023, …}
  // deadline ? dayjs(deadline, 'DD/MM/YYYY').format("dddd, MMMM D") : dayjs()

  // console.log(deadline) //01/09/2023
  // console.log(dayjs(deadline)) // M {... Mon Jan 09 2023 00:00:00 ...} - міняє день і місяць місцями
  // console.log(dayjs(deadline, 'DD/MM/YYYY')); // M {... Fri Sep 01 2023 00:00:00 ...} - тепер все Ок
  // Тепер бібліотека Material UA застосує формат "dddd, MMMM D" і отримаємо те, що треба:
  // console.log(dayjs(deadline, 'DD/MM/YYYY').format("dddd, MMMM D")); // Thursday, August 31

  // "Today, September 01" або "Saturday, September 02"
  const dateFormat =
    dayjs(selectedDate).format('dddd, MMMM D') ===
    dayjs().format('dddd, MMMM D')
      ? '[Today,] MMMM D'
      : 'dddd, MMMM D';

  //------------------ Ширина інпута DatePicker---------------------
  useEffect(() => {
    const contentWidth = selectedDate.format(dateFormat).length * 9;
    setInputWidth(`${contentWidth}px`);
  }, [selectedDate, dateFormat]);

  //-----------------Передача даних в AddCard-----------------------
  useEffect(() => {
    const formatedSelectedDate = dayjs(selectedDate).format('DD/MM/YYYY'); // 29/11/2023
    onFormatDeadline && onFormatDeadline(formatedSelectedDate);
  }, [selectedDate, onFormatDeadline]);

//--------------------Створення теми--------------------------------

  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','), // інпут
    },
    components: {
      MuiPaper: { // полотно календаря
        styleOverrides: {
          root: {
            position: 'relative',
            width: '233px',
            height: '254px',
            padding: '18px',
            background: user.theme === 'dark' ? '#1F1F1F' : '#FFF',
            border: '1px solid',
            borderRadius: '8px',
            borderColor: user.theme === 'violet' ? '#585bbe' : '#bedfad',
          },
        },
      },
      MuiPickersDay: { // усі дні
        styleOverrides: {
            root: {
                width: '23px',
                height: '23px',
                fontSize: '14px',
                fontweight: '400',
                lineHeight: '18px',
                '&:hover': {
                    backgroundColor: user.theme === 'violet' ? '#8d8fc9' : '#9fd186',
                },
            },
            dayOutsideMonth: { // місяць
              color: user.theme === 'dark' ? '#FFF' : '#161616',  
            },
            dayWithMargin: {// видимі дати за межами місяця
              color: user.theme === 'dark' ? 'rgba(255, 255, 255, 0.20)' : 'rgba(22, 22, 22, 0.20)',   
              '&.Mui-disabled:not(.Mui-selected)': { // минулі дати, які не можна обрати
                color: user.theme === 'dark' ? 'rgba(255, 255, 255, 0.20)' : 'rgba(22, 22, 22, 0.20)',
              }, 
            },  
        },
      },
      MuiPickersLayout: { // полотно календаря без падінгів
        styleOverrides: {
            root: {
                width: '197px',
            },
        },
      },
      MuiDateCalendar: {   // полотно календаря без падінгів
        styleOverrides: {
            root: {
                width: '197px',
            },
        },
     },
     MuiPickersFadeTransitionGroup: {
        styleOverrides: {
            root: {
                color: '#161616',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '-0.32px',
            },
        },
     },
     MuiDayCalendar: {
      styleOverrides: {
        slideTransition: {
          minHeight: '155px', // обмежуємо висоту полотна календаря
        },
        header: { 
          marginTop: '14px',  // висота лінійки з днями тижня
        },
        weekDayLabel: {
          height: '23px',  // висота кожного дня тижня
          width: '23px',
          color: user.theme === 'dark' ? 'rgba(255, 255, 255, 0.50)' : 'rgba(22, 22, 22, 0.50)',    // rgba(255, 255, 255, 0.50);
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: 'normal',
          letterSpacing: '-0.28px',
        },
      },
     },   
     MuiPickersCalendarHeader: {   
        styleOverrides: {
            root: {
                padding: 0,
                margin: 0,
                borderBottom: '1px solid',
                borderBottomColor: user.theme === 'dark' ? 'rgba(255, 255, 255, 0.20)' : 'rgba(22, 22, 22, 0.20)',
            },
            label: {
                margin: 0,
                paddingBottom: '14px',
                color: user.theme === 'dark' ? '#FFF' : '#161616',
            },
            labelContainer: {
                marginRight: 'auto',
                marginLeft: 'auto',
            },
        },
     },
     MuiPickersArrowSwitcher: {
        styleOverrides: {
          spacer: {
            width: 0,
          },
        },
     },
    },
    palette: {
      primary: {
        main: '#BEDBB0', // без цього не працює
        dark: user.theme === 'violet' ? '#8d8fc9' : '#9fd186', // обраний колір дня
      },
    },
  });


  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}> {/* dateAdapter={AdapterDayjs} - вказуємо, що під капотом використовуємо бібліотеку Day.js (її методи) */}
      <ThemeProvider theme={theme}>
        <DatePicker
          open={isCalendarOpen}
          onClose={() => setIsCalendarOpen(false)} // закриття календаря
          onChange={date => setSelectedDate(date)} //Material UA в date записує обрану з календаря дату
          // M {$L: 'en', $u: undefined, $d: Fri Sep 01 2023 09:13:29 GMT+0300 (за східноєвропейським літнім часом), $x: {…}, $y: 2023, …}
          value={selectedDate}
          format={dateFormat} // приймає рядок
          disablePast={true} // минулі дати не обируться
          dayOfWeekFormatter={day => day.slice(0, 2)}// видимі перші 2 літери назви дня тижня          
          showDaysOutsideCurrentMonth
          slots={{
            openPickerButton: () => null, 
          }}
          slotProps={{
            switchViewButton: { sx: { display: 'none' } }, // стрілка вниз поряд з місяцем і роком
            previousIconButton: {   // кнопка <
                sx: {
                  position: 'absolute',
                  top: '5px',
                  left: '5px',
                  size: 'small',
                  color: user.theme === 'violet' ? '#5255BC' : '#BEDBB0',  // серединка
                  stroke: 'none', // обводка
                },
            },
            nextIconButton: {  // кнопка >
                sx: {
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  color: user.theme === 'violet' ? '#5255BC' : '#BEDBB0',  // серединка
                  stroke: 'none', // обводка
                },
            },
            textField: {
              fullWidth: false,
              onClick: () => setIsCalendarOpen(true), // інпут стає клікабельним; по кліку відкривається календар (picker)
              variant: 'standard',
              size: 'small',
              sx: {
                width: inputWidth,
                minWidth: '130px',
              },
              InputProps: {
                disableUnderline: true, // прибирає дефолтний нижній бордер
                'aria-label': 'deadline',
                style: {
                  fontSize: '14px',
                  fontFamily: 'Poppins, sans-serif',
                  color: user.theme === 'violet' ? '#5255BC' : '#BEDBB0', // колір тексту
                  fontWeight: 500,
                },
                endAdornment: (  // розташування іконки - в кінці інпуту (є і startAdornment)
                  <InputAdornment
                    position="start"
                    sx={{ cursor: 'pointer' }}
                  >
                    <svg className={scss.OBAddDateIcon} width="18px">
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
      </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
};





