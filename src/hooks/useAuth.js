import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsToken,
  selectNeedHelpMessage,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectIsToken);
  const needHelpMessage = useSelector(selectNeedHelpMessage);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
    needHelpMessage,
  };
};
// import { useAuth } from 'hooks';
// const { isRefreshing, isLoggedIn, user, token } = useAuth();
