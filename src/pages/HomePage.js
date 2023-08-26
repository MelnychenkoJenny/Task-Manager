import { NavLink } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import {ImageUpload} from '../components/ImageUpload/ImageUpload.jsx'

const HomePage = () => (
  <>
    <h1>
      Hello, I am a HomePage (provate route).
      I have 2 components (Header and Sidebar) and a ScreensPage. 
      I have a links to different user's boards as well ('/home/:boardName'):   
    </h1>
    <p>
      <NavLink to="/home/project-office">Project office board (click me)</NavLink>
      </p>
      <Sidebar/>
      <ImageUpload/>
  </>
);

export default HomePage;