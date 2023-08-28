import Home from 'components/Home/Home';
import Header from 'components/Header/Header.jsx';
import { useState } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';

const HomePage = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <Header click={handleClick} />
      <Home />
      {menuActive && <Sidebar />}
    </>
  );
};
export default HomePage;
