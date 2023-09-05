import scss from '../../styles/index.module.scss';
import { Formik, Form } from 'formik';
import { useAuth } from 'hooks';


const NeedHelp = () => { 

        const { user } = useAuth();
    
        const initialValues = {
        email: '',
        comment: '',
        };


    return (
        <div data-theme={user.theme}>
            <Formik
            initialValues={initialValues}
            //     onSubmit={handleSubmit}
            >
                <Form autoComplete="off">
                    <div className={scss.mainModalHelpWrap}>
                    <p className={scss.titleModalHelp}>Need help</p>
                            <input
                                type="email"
                                name="email"
                                className={scss.formInputHelp}
                                placeholder="Email address"
                            />   
                            <textarea
                                type="text"
                                name="comment"
                                className={scss.formInputHelpComment}
                                placeholder="Comment"
                            />
                        <button type="submit" className={scss.formBtnModalHelp}>
                                Send
                        </button>
                        </div>
                 </Form>
            </Formik>
        </div>
    )


}

export default NeedHelp;