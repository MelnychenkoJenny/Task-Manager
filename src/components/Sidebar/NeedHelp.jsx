import scss from '../../styles/index.module.scss';
import { Formik, Form } from 'formik';
import { useAuth } from 'hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { needHelp } from '../../redux/auth/authOperations';

const NeedHelp = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const { user } = useAuth();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    comment: '',
  };
  const submitMessage = () => {
    if (email || comment) {
      dispatch(needHelp({ email, comment }));
      setComment('');
      setEmail('');
      onClose();
    }
  };

  return (
    <div data-theme={user.theme}>
      <Formik initialValues={initialValues} onSubmit={submitMessage}>
        <Form autoComplete="off">
          <div className={scss.mainModalHelpWrap}>
            <p className={scss.titleModalHelp}>Need help</p>
            <input
              type="email"
              name="email"
              value={email}
              className={scss.formInputHelp}
              placeholder="Email address"
              onChange={e => setEmail(e.target.value)}
            />
            <textarea
              type="text"
              name="comment"
              value={comment}
              className={scss.formInputHelpComment}
              placeholder="Comment"
              onChange={e => setComment(e.target.value)}
            />
            <button
              type="submit"
              className={scss.formBtnModalHelp}
              disabled={!email}
            >
              Send
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default NeedHelp;
