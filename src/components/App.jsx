import { useEffect, useCallback, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

import { useAuth } from 'hooks';
import RestrictedRout from 'components/Route/RestrictedRout';
import PrivateRoute from 'components/Route/PrivateRoute';
import authOperations from 'redux/auth/authOperations';
import Loader from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const HomePage = lazy(() => import('pages/HomePage'));
// const ScreensPage = lazy(() => import('pages/ScreensPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const memoizedNavigate = useCallback(navigate, [navigate]);

  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(authOperations.checkAuth());
  }, [dispatch]);

  useEffect(() => {
    (() => {
      if (isLoggedIn) {
        memoizedNavigate('/home');
      }
    })();
  }, [isLoggedIn, memoizedNavigate]);

  return (
    <>
      {!isRefreshing && (
        <>
          <Suspense fallback={<Loader />}>
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
              <Route path="/home" element={<SharedLayout />}>
                <Route
                  index
                  element={<PrivateRoute redirectTo="/" component={HomePage} />}
                />
                <Route
                  path="/home/:boardName"
                  element={<PrivateRoute redirectTo="/" component={HomePage} />}
                />
              </Route>
              {/* <Route path="/home" exact element={<SharedLayout />}>
              <Route
                path="home"
                element={
                  <PrivateRoute component={HomePage} redirectTo="/"></PrivateRoute>
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
            </Route> */}

              <Route path="*" exact={true} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};
