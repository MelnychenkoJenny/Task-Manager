import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const RestrictedRout = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
export default RestrictedRout;
