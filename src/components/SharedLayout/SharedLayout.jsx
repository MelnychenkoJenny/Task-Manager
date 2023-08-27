import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<div>...Loader</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
