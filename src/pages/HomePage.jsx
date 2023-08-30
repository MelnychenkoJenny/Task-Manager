import ScreensPage from 'components/ScreensPage/ScreensPage';
import { useAuth } from 'hooks';


const HomePage = () => {
  
  const { user } = useAuth();

  
  // !!!!!!!!!!!!!ЗМІНА ТЕМИ!!!!!!!!!!!!!!!!!


  return (
    <div data-theme={user.theme}>
      <ScreensPage />
    </div>
  );
};
export default HomePage;