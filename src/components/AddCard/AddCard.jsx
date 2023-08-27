// import React, { useState } from 'react';
import scss from 'styles/index.module.scss';
import SvgSprite from 'images/sprite.svg';

const AddCard = () => {
  const handleFormSubmit = event => {
    console.log('Hi it is handleFormSubmit');
    event.preventDefault();

    // const inputTitle = event.target.elements.title.value.trim();
    // const inputDescription = event.target.elements.description.value.trim();
    // const inputPriority = event.target.elements.priority.value;
    // const inputDate =

    // checkNameClone(inputTitle, inputDescription, inputPriority); // відправка на бек
    event.target.reset();
  };

  return (
    <div className={scss.Addcontainer}>
      <h4 className={scss.Addtitle}>Add card</h4>
      <form onSubmit={handleFormSubmit} autoComplete="off">
        <label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoFocus
            required
            className={scss.input}
          />
        </label>
        <label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className={`${scss.Addinput} ${scss.Adddescription}`}
          />
        </label>
        <div className={scss.Addlabel}>
          Label color
          <div className={scss.AddradioGroup}>
            <label>
              <input
                type="radio"
                name="priority"
                value="low"
                className={scss.AddradioBtn}
              />
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="medium"
                className={scss.AddradioBtn}
              />
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="high"
                className={scss.AddradioBtn}
              />
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="without"
                defaultChecked
                className={scss.AddradioBtn}
              />
            </label>

            {/* <input type="radio" name="priority" value="low" className={scss.radiooption} id="radio-option1" />
                        <label htmlFor="radio-option1" className={scss.radiolabel}></label>

                        <input type="radio" name="priority" value="medium" className={scss.radiooption} id="radio-option2" />
                        <label htmlFor="radio-option2" className={scss.radiolabel}></label>

                        <input type="radio" name="priority" value="high" className={scss.radiooption} id="radio-option3" />
                        <label htmlFor="radio-option3" className={scss.radiolabel}></label>

                        <input type="radio" name="priority" value="without" className={scss.radiooption} id="radio-option4" />
                        <label htmlFor="radio-option4" className={scss.radiolabel}></label>  */}
          </div>
        </div>
        <label className={scss.Addlabel}>
          Deadline
          <input
            type="date"
            name="deadline"
            className={scss.AdddeadlineInput}
          />
        </label>
        <button className={scss.AddaddBtn}>
          <div className={scss.AddiconWrapper}>
            <svg className={scss.Addicon}>
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
