import { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Header from 'components/Header/Header.jsx';
import { useState, useEffect } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import styles from 'styles/index.module.scss';
import { useAuth } from 'hooks';
import Loader from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { getAllBoards, getBoardById } from 'redux/board/boardOperations';

export const SharedLayout = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { boardName } = useParams();

  useEffect(() => {
    dispatch(getAllBoards());
    dispatch(getBoardById(boardName));
  }, [boardName, dispatch]);

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
    // <div
    //   className={styles.AFNavResWr}
    //   // onClick={hendleBackdropClose}
    //   data-theme={user.theme}
    // >
    <div className={styles.AfBodyWr} data-theme={user.theme}>
      {menuActive && <Sidebar click={hendleBackdropClose} />}
      <div className={styles.AfMainWr}>
        <Header click={handleClick} />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
    // </div>
  );
};
