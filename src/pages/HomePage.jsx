import Home from 'components/Home/Home';
import Header from 'components/Header/Header.jsx';
import { useState, useEffect} from 'react';
import Sidebar from 'components/Sidebar/Sidebar';

const HomePage = () => {

  const [menuActive, setMenuActive] = useState(false);
  

  useEffect(() => {
    const hendleEscClose  = event => {
      if (event.code === 'Escape' && window.innerWidth <= 1439) {
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
      if (window.innerWidth >= 1440) {
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
    if (event.target === event.currentTarget && window.innerWidth <= 1439) {
      setMenuActive(false);
    }
  };

  return (
    <>
      <div onClick={hendleBackdropClose}>
      <Header click={handleClick}/>
      <Home />
        {menuActive && <Sidebar />}
        </div>
    </>     
  )
};
export default HomePage;
