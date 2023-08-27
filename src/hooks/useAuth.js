import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsToken,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectIsToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
  };
};
// import { useAuth } from 'hooks';
// const { isRefreshing, isLoggedIn,user } = useAuth();
