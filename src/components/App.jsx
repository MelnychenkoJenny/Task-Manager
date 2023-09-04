import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

import { useAuth } from 'hooks';
import RestrictedRout from 'components/Route/RestrictedRout';
import PrivateRoute from 'components/Route/PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';
import Loader from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { EmptyBoardPage } from './EmptyBoardPage/EmptyBoardPage';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
                  element={<PrivateRoute redirectTo="/" component={EmptyBoardPage} />}
                />
                <Route
                  path=":boardName"
                  element={<PrivateRoute component={HomePage} />}
                />
              </Route>

              <Route path="*" exact={true} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};
