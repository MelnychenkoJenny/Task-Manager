import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isRefreshing, isLoggedIn, token } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn && token === null;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
export default PrivateRoute;
