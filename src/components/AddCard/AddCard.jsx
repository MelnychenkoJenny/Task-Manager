// import React, { useState } from 'react';
import scss from './AddCard.module.scss';
import SvgSprite from '../../images/sprite.svg';


const AddCard = () => {       
 
    const handleFormSubmit = (event) => {
        console.log('Hi it is handleFormSubmit');
        event.preventDefault();

        // const inputTitle = event.target.elements.title.value.trim();
        // const inputDescription = event.target.elements.description.value.trim();
        // const inputPriority = event.target.elements.priority.value;
        // const inputDate = 
        
        // checkNameClone(inputTitle, inputDescription, inputPriority); // відправка на бек
        event.target.reset();
    }
    
    return (
        <div className={scss.container}>
        <h4 className={scss.title}>Add card</h4>
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
                    className={`${scss.input} ${scss.description}`}
                />
            </label>
                <div className={scss.label}> 
                    Label color
                    <div className={scss.radioGroup}>

                        <label>
                            <input type="radio" name="priority" value="low" className={scss.radioBtn} />
                        </label>
                        <label>
                            <input type="radio" name="priority" value="medium" className={scss.radioBtn} />
                        </label>
                        <label>
                            <input type="radio" name="priority" value="high" className={scss.radioBtn} />
                        </label>
                        <label>
                            <input type="radio" name="priority" value="without" defaultChecked className={scss.radioBtn} />
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
            <label className={scss.label}>
                Deadline
                <input type="date" name="deadline" className={scss.deadlineInput} /> 
            </label>
            <button className={scss.addBtn}>
                <div className={scss.iconWrapper}>
                    <svg className={scss.icon}>
                            <use href={SvgSprite + '#icon-plus'} />
                    </svg>
                </div>
                Add
            </button>
        </form>
        </div>
    );
}
export default AddCard;