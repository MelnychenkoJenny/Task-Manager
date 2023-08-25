import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";

// import PublicRoute from "./PublicRoute";
// import PrivateRoute from "./PrivateRoute";


// Відкладені імпорти. Сторінка не завантажиться, якщо її не відвідати
const WelcomePage = lazy(() => import('../../pages/WelcomePage')); // стартова сторінка
const AuthPage = lazy(() => import('../../pages/AuthPage'));
const HomePage = lazy(() => import ('../../pages/HomePage'));
const ScreensPage = lazy(() => import ('../../pages/ScreensPage'));
const ErrorPage = lazy(() => import ('../../pages/ErrorPage'));


export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
         <Routes>  
            <Route path='welcome' element={<WelcomePage />} />
            <Route path='/auth/:id' element={ /*<PublicRoute>*/ <AuthPage /> /*<PublicRoute>*/ } />   
            <Route path='/home' element={ /*<PrivateRoute>*/ <HomePage /> /*<PrivateRoute>*/} />     
            <Route path='/home/:boardName' element={ /*<PrivateRoute>*/  <ScreensPage /> /*<PrivateRoute>*/} /> 
            <Route path='*' element={<ErrorPage />} />  
         </Routes>
      </Suspense>
    </div>
  );
};