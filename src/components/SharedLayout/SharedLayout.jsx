import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header.jsx';
import { useState } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import styles from 'styles/index.module.scss';

export const SharedLayout = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={styles.AFNavResWr}>
      <header className={styles.AFNavResWrHead}>
        <Header click={handleClick} />
      </header>
      {menuActive && (
        <aside className={styles.AFNavResWrAside}>
          <Sidebar />
        </aside>
      )}
      <main className={styles.AFNavResWrMain}>
        <Suspense fallback={<div>...Loader</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
