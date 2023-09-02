import scss from '../../styles/index.module.scss';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

const updateUserSchema = object({
    name: string()
    .matches(/^[0-9a-zA-Z!@#$%^&*]{2,32}$/, 'Type in correct name')
    .trim(),

    email: string()
    .matches(
      /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Type in correct email'),
    
    password: string()
    .matches(/^[0-9a-zA-Z!@#$%^&*]{6,64}$/, 'Type in correct password, at least 6 characters'),

})
    

const EditProfile = ({onClose}) => {

    const { user } = useAuth();
    // console.log(user);
    
    const dispatch = useDispatch();
    


    const [avatarURL, setAvatarURL] = useState('');
    const [currentImage, setCurrentImage] = useState(user.avatarURL);
    const [showPassword, setShowPassword] = useState(false);

    
    const initialValues = {
        name: user.name, 
        email: user.email,
        password: user.password,
    };


    
    const handleFileChange = (event) => {
        const file = event;
        if (!file) {
        return;
        }
        setAvatarURL(file);

        const reader = new FileReader();

        reader.onload = function (event) {
        setCurrentImage(event.target.result);
        };

        reader.readAsDataURL(file);    

    }

    

    const togglePassword = () => {
    setShowPassword(!showPassword);    
    };





    const handleSubmit = async values => {

            await dispatch(
                authOperations.updateUserProfile({
                    name: values.name, 
                    email: values.email,
                    password: values.password,
                    // avatarURL: currentImage,
                })
            );  

// console.log(currentImage) - файл, описанный буквами
    }  
    

    return (
        <>
        <Formik
            validationSchema={updateUserSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            >
                    <Form className={scss.formEditUser} autoComplete="off">
                        <div className={scss.mainModalEditUserWrap}>
                            <div className={scss.modalEditUserTopWrap}>
                                <p className={scss.titleEditUser}>Edite Profile</p>
                                <button type='button' onClick={onClose} className={scss.btnCloseProfile}>
                                    <svg className={scss.svgCloseEditUser} width="18" height="18">
                                        <use href={`${sprite}#icon-close`}></use>
                                    </svg>
                                </button>
                            </div>
                            <div className={scss.addAvatarBtnWrap}>
                                {avatarURL ? <img src={currentImage} alt="user avatar" className={scss.avatar} /> : <p className={scss.avatar}></p>}
                                <input
                                    className={scss.inputAvatar}
                                    type="file"
                                    name="avatarURL"
                                    id='avatarInput'
                                onChange={event => {
                                    handleFileChange(event.currentTarget.files[0])
                                }}
                                    accept="image/*,.png,.jpg,.gif,.web"
                                ></input>
        
                                <button type='button' className={scss.btnAddAvatar}
                                    onClick={() => document.getElementById('avatarInput').click()}
                                >
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
                                    <div className={scss.showPassProfileWrap}>
                                        <Field
                                            className={scss.formInputEditUser}
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder="Change your password"
                                        />
                                        <svg
                                            className={scss.showPasswordEditProfile}
                                            alt="watch password icon"
                                            onClick={togglePassword}
                                        >
                                            <use href={`${sprite}#icon-eye`} />
                                        </svg>
                                    </div>
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

export default EditProfile;