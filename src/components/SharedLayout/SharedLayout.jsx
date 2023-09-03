import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header.jsx';
import { useState, useEffect } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import styles from 'styles/index.module.scss';
import { useAuth } from 'hooks';

export const SharedLayout = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const hendleEscClose = event => {
      if (event.code === 'Escape' && window.innerWidth <= 1199.99) {
        setMenuActive(false);
      }
    };

    window.addEventListener('keydown', hendleEscClose);

    return () => {
      window.removeEventListener('keydown', hendleEscClose);
    };
  }, [menuActive, setMenuActive]);

  useEffect(() => {
    const handleMinXlSize = () => {
      if (window.innerWidth >= 1199.99) {
        setMenuActive(true);
      } else {
        setMenuActive(false);
      }
    };

    handleMinXlSize();

    window.addEventListener('resize', handleMinXlSize);

    return () => {
      window.removeEventListener('resize', handleMinXlSize);
    };
  }, [setMenuActive]);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  const hendleBackdropClose = event => {
    if (event.target === event.currentTarget && window.innerWidth <= 1199.99) {
      setMenuActive(false);
    }
  };

  return (
    <div
      className={styles.AFNavResWr}
      onClick={hendleBackdropClose}
      data-theme={user.theme}
    >
      <body className={styles.AfBodyWr}>
        {menuActive && <Sidebar />}
        <div className={styles.AfMainWr}>
          <Header click={handleClick} />
          <main>
            <Suspense fallback={<div>...Loader</div>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </body>
    </div>
  );
};
