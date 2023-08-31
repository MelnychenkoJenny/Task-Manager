import ScreensPage from 'components/ScreensPage/ScreensPage';
import { useAuth } from 'hooks';


const HomePage = () => {
  
  const { user } = useAuth();

  console.log(222,user)
  // !!!!!!!!!!!!!ЗМІНА ТЕМИ!!!!!!!!!!!!!!!!!


  return (
    <>
      {user && (<div data-theme={user.theme}>
        <ScreensPage />
      </div>)}
    </>
  );
};
export default HomePage;