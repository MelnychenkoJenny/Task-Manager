// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';
const PopColumn = () => {

  // const dispatch = useDispatch();
  // const activeBoard = useSelector(selectActiveBoard);

  

  return (
    <div className={scss.AAColumnContainer}>
      <h4 className={scss.AAColumnTitle}>Add column</h4>
      <form autoComplete="off">
        <label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoFocus
            required
            className={scss.AAColumnInput}
          />
        </label>
        <button className={scss.AAColumnBtn}>
          <div className={scss.AAColumnSvgContainer}>
            <svg className={scss.AAColumnSvg}>
              <use href={SvgSprite + '#icon-plus'} />
            </svg>
          </div>
          Add
        </button>
      </form>
    </div>
  );
};

export default PopColumn;
