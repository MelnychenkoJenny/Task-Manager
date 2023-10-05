import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsToken,
  selectNeedHelpMessage,
  selectIsLoading,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectIsToken);
  const needHelpMessage = useSelector(selectNeedHelpMessage);
  const loading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
    needHelpMessage,
    loading,
  };
};
// import { useAuth } from 'hooks';
// const { isRefreshing, isLoggedIn, user, token, loading } = useAuth();
