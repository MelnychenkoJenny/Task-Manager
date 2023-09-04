import { useDispatch } from 'react-redux';
import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from 'hooks';

const PopColumn = ({
  modalTitle,
  modalBtnTitle,
  onClose,
  operation,
  idColumn,
  infoData,
}) => {
  const { user } = useAuth();
  const boardId = useParams();
  const dispatch = useDispatch();
  const [valueInput, setvalueInput] = useState(
    infoData ? { title: infoData.title } : { title: '' }
  );
  const handleChange = event => {
    const { name, value } = event.target;
    setvalueInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log('idColumn :>> ', idColumn);
  const handleSubmit = e => {
    e.preventDefault();

    const dataSubmit = idColumn
      ? {
          title: valueInput.title,
          idColumn: idColumn,
        }
      : {
          title: valueInput.title,
          board: boardId.boardName,
        };
    dispatch(operation(dataSubmit));

    onClose();
  };

  return (
    <div className={scss.AAColumnContainer} data-theme={user.theme}>
      <h4 className={scss.AAColumnTitle}>{modalTitle}</h4>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoFocus
            required
            className={scss.AAColumnInput}
            value={valueInput.title || ''}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={scss.AAColumnBtn}>
          <div className={scss.AAColumnSvgContainer}>
            <svg className={scss.AAColumnSvg}>
              <use href={SvgSprite + '#icon-plus'} />
            </svg>
          </div>
          {modalBtnTitle}
        </button>
      </form>
    </div>
  );
};

export default PopColumn;
