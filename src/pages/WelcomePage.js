import { NavLink } from 'react-router-dom';

const WelcomePage = () => (
  <>
  <h1>
      Hello, I am a WelcomePage (public route). 
      I have the link to AuthPage (/auth/:id):
  </h1>
  <p>
    <NavLink to="/auth/register">Register (click me)</NavLink>
  </p>
  <p>
    <NavLink to="/auth/login">Login (click me)</NavLink>
  </p>
</>
);

export default WelcomePage;