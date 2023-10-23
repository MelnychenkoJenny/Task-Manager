import { useState } from 'react';
import { useDispatch } from 'react-redux';
import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { useAuth } from 'hooks';
import { useParams } from 'react-router-dom';
import { RadioBtns } from './RadioBtns';
import { Calendar } from './Calendar';

export const AddCard = ({
  modalTitle,
  modalBtnTitle,
  idColumn, // тут і нижче для редагування
  id,
  cardTitle,
  description,
  priority,
  deadline,
  onClose,
  operation,
}) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { boardName } = useParams();

  const [titleValue, setTitleValue] = useState(cardTitle); // для редагування
  const [descriptionValue, setDescriptionValue] = useState(description); // для редагування
  const [inputDeadline, setInputDeadline] = useState(null);

  const onHandleFormatDeadline = formatedSelectedDate => {
    setInputDeadline(formatedSelectedDate);
  };

  //------------------------------------- Submit -------------------------------------------

  const handleFormSubmit = event => {
    // відправка даних
    event.preventDefault();

    const inputTitle = event.target.elements.title.value.trim();
    let inputDescription = event.target.elements.description.value.trim();
    const inputPriority = event.target.elements.priority.value;

    if (inputDescription === '') {
      inputDescription = ' ';
    }

    if (
      inputTitle === cardTitle &&
      inputDescription === description &&
      inputPriority === priority &&
      inputDeadline === deadline
    ) {
      onClose();
      return;
    }

    const cardData = {
      title: inputTitle,
      description: inputDescription,
      priority: inputPriority,
      deadLine: inputDeadline,
    };

    if (id) {
      dispatch(
        operation({
          ...cardData,
          taskOwner: idColumn,
          idTask: id,
          boardId: boardName,
        })
      );
    } else {
      dispatch(
        operation({ ...cardData, taskOwner: idColumn, boardId: boardName })
      );
    }

    event.target.reset();

    if (event.currentTarget === event.target) {
      onClose();
      document.body.style.overflow = 'visible'; //body почне скролитися після закриття модалки
    }
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
            onChange={e => setTitleValue(e.target.value)} // для редагування
          />
        </label>
        <label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className={`${scss.OBAddInput} ${scss.OBAddDescription}`}
            defaultValue={descriptionValue} // для редагування
            onChange={e => setDescriptionValue(e.target.value)} // для редагування
          />
        </label>

        <RadioBtns parentComponent={'AddCard'} priority={priority} />

        <div>
          <p className={scss.OBAddlabel}>Deadline</p>
          <Calendar
            deadline={deadline}
            onFormatDeadline={onHandleFormatDeadline}
          />
        </div>

        <button type="submit" className={scss.OBAddSubmitBtn}>
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
