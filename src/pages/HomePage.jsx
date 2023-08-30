import ScreensPage from 'components/ScreensPage/ScreensPage';
import { useAuth } from 'hooks';


const HomePage = () => {

const { user } = useAuth();
console.log(user)

  return (
    <>
      <ScreensPage />
    </>
  );
};
export default HomePage;