import { NavLink } from 'react-router-dom';

const AuthPage = () => (
  <>
    <h1>
      Hello, I am an AuthPage (public route).
      I have the links to the following pages: 
    </h1>
    <p>
      <NavLink to="/home">HomePage (click me)</NavLink>
    </p>
    <p>
      <NavLink to="/welcome">WellcomePage (click me)</NavLink>
    </p>
  </>
);

export default AuthPage;