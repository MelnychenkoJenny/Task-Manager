import scss from '../../styles/index.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../redux/auth/authOperations.js';
import userDark from '../../images/user-default-dark.png';
import userLight from '../../images/user-default-light.png';
import userViolet from '../../images/user-default-violet.png';

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
    
    const [avatarFile, setAvatarFile] = useState('');
    const [currentImage, setCurrentImage] = useState(user.avatarURL);
    const [showPassword, setShowPassword] = useState(false);

    
    const initialValues = {
        name: user.name, 
        email: user.email,
        password: "",
    };


    const handleFileChange = (event) => {
        const file = event;
        if (!file) {
        return;
        }
        setAvatarFile(file);  

        const reader = new FileReader();

        reader.onload = function (event) {
        setCurrentImage(event.target.result);
        };

        reader.readAsDataURL(file);    

    }

    

    const togglePassword = () => {
    setShowPassword(!showPassword);    
    };



    const handleSubmit = async (values, { resetForm }) => {
        let formData = new FormData();
            formData.set('name', values.name);
            formData.set('email', values.email);
            formData.set('password', values.password);
            if (avatarFile) formData.set('avatar', avatarFile);
                try {
                    await dispatch(updateUserProfile(formData));
                    onClose();
                    resetForm();
                } catch (error) { 
                    
                } 
    } 

        const setDefaultAvatar = () => {
    if (user.theme === 'dark') {
      return userDark;
    } else if (user.theme === 'light') {
      return userLight;
    } else if (user.theme === 'violet') {
      return userViolet;
    }
  };

    return (
        <div data-theme={user.theme} >
        <Formik
            validationSchema={updateUserSchema}
            initialValues={initialValues}
                onSubmit={handleSubmit}
                data-theme={user.theme}
            >
                    <Form className={scss.formEditUser} autoComplete="off">
                        <div className={scss.mainModalEditUserWrap}>
                            <div className={scss.modalEditUserTopWrap}>
                                <p className={scss.titleEditUser}>Edite Profile</p>
                        </div>
                            <div className={scss.addAvatarBtnWrap}>
                            {currentImage !== '/' ? <img src={currentImage} alt="user avatar" className={scss.avatar} /> : <img src={setDefaultAvatar()} alt='defaultAvatar' className={scss.avatar}></img>}
                            
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
                                    <ErrorMessage
                                    name="name"
                                    component="div"
                                    />
                                </label>
                                <label className={scss.formLabelEditUser}>
                                    <Field
                                        className={scss.formInputEditUser}
                                        type="email"
                                        name="email"
                                    />
                                    <ErrorMessage
                                    name="email"
                                    component="div"
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
                                    <ErrorMessage
                                        name="password"
                                        component="div"
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
      </div>  
    )
}

export default EditProfile;