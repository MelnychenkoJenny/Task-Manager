import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

import { useAuth } from 'hooks';
import RestrictedRout from 'components/Route/RestrictedRout';
import PrivateRoute from 'components/Route/PrivateRoute';
import authOperations from 'redux/auth/authOperations';
import 'react-toastify/dist/ReactToastify.css';
import { AddCard } from './AddCard';

import WelcomePage from 'pages/WelcomePage';
import SignInPage from 'pages/SignInPage';
import RegistrationPage from 'pages/RegistrationPage';
import Home from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';

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
            <Route path="/" exact element={<WelcomePage />} />
            <Route
              path="auth/login"
              element={
                <RestrictedRout component={SignInPage} redirectTo="/home" />
              }
            />
            <Route
              path="auth/register"
              element={
                <RestrictedRout
                  component={RegistrationPage}
                  redirectTo="/home"
                />
              }
            />
            <Route path="/home" exact element={<SharedLayout />}>
              <Route
                path="home"
                element={
                  <PrivateRoute component={Home} redirectTo="/"></PrivateRoute>
                }
              />
              <Route
                path="home/:boardName"
                element={
                  <PrivateRoute
                    component={AddCard}
                    redirectTo="/"
                  ></PrivateRoute>
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
