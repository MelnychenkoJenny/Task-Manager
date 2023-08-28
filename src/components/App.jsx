import {
  lazy,
  useEffect
} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

import { useAuth } from 'hooks';
import RestrictedRout from 'components/Route/RestrictedRout';
import PrivateRoute from 'components/Route/PrivateRoute';
import authOperations from 'redux/auth/authOperations';
import 'react-toastify/dist/ReactToastify.css';
import { AddCard } from './AddCard';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const Home = lazy(() => import('pages/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.checkAuth());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <>
      <Routes>
        <Route path="/" exact element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route
            path="auth/login"
            element={
              <RestrictedRout component={SignInPage} redirectTo="/home" />
            }
          />
          <Route
            path="auth/register"
            element={
              <RestrictedRout component={RegistrationPage} redirectTo="/home" />
            }
          />
          <Route
            path="home"
            // element={<RestrictedRout component={Home} redirectTo="/" />}
            element={
              <PrivateRoute component={Home} redirectTo="/"></PrivateRoute>
            }
          />
          <Route
            path="home/:boardName"
            // element={<RestrictedRout component={Home} redirectTo="/" />}
            element={
              <PrivateRoute component={AddCard} redirectTo="/"></PrivateRoute>
            }
          />
        </Route>
        <Route path="*" exact={true} element={<NotFoundPage />} />
      </Routes>
    </>
    )}
    </>
  );
};
