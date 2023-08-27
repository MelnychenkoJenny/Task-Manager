// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import scss from './EditProfile.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import sprite from '../../images/sprite.svg';



const updateUserSchema = object({
    name: string()
    .matches(/^[0-9a-zA-Z!@#$%^&*]{2,32}$/, 'Type in correct name')
    .trim(),
        
    email: string()
    .matches(
      /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Type in correct email')
    .required(),
  password: string()
    .matches(/^[0-9a-zA-Z!@#$%^&*]{8,64}$/, 'Type in correct password')
    .required(),
})
    


const editProfile = () => {



    const initialValues = {
        avatar: null,
        name: 'user.name', 
        email: 'user.email',
        password: '',
    };


    return (
        <>
        <Formik
            validationSchema={updateUserSchema}
            initialValues={initialValues}
            //   onSubmit={handleSubmit}
            >
                <Form className={scss.formEditUser} autoComplete="off">
                    <div className={scss.mainModalEditUserWrap}>
                    <div className={scss.modalEditUserTopWrap}>
                    <p className={scss.titleEditUser}>Edite Profile</p>
                        <span>
                        <svg className={scss.svgCloseEditUser} width="18" height="18">
                            <use href={`${sprite}#icon-close`}></use>
                        </svg>
                    </span>
                    </div>
                    <div className={scss.addAvatarBtnWrap}>
                        <p className={scss.avatar}></p>
                        <button type='button' className={scss.btnAddAvatar}>
                        <span className={scss.btnSpan}>
                            <svg className={scss.svgPlusEditUser} width="10" height="10">
                                <use href={`${sprite}#icon-plus`}></use>
                            </svg>
                        </span>
                        </button>
                    </div>
                    <div className={scss.formUserInfoWrap}>
                    <label className={scss.formLabelEditUser}>
                    <Field
                        className={scss.formInputEditUser}
                        type="name"
                        name="name"
                    />
                    </label>
                    <label className={scss.formLabelEditUser}>
                    <Field
                        className={scss.formInputEditUser}
                        type="email"
                        name="email"
                    />
                    </label>
                    <label className={scss.formLabelEditUser}>
                    <Field
                        className={scss.formInputEditUser}
                        type="password"
                        name="password"
                        placeholder="Change your password"
                    />
                    </label>
                    </div>
                    <button className={scss.formBtnEditUser} type="submit">
                    Send
                        </button>
                        </div>
            </Form>      
        </Formik>


      </>  
    )
}

export default editProfile;